(()=>{
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  const questions=document.getElementById('questions');
  if(!questions)return;

  let active=null;

  function enhance(){
    questions.querySelectorAll('.q textarea').forEach(field=>{
      if(field.dataset.dictationReady==='1')return;
      field.dataset.dictationReady='1';

      const q=field.closest('.q');
      const qid=q?.dataset.id;
      if(!qid)return;

      let actions=field.nextElementSibling;
      if(!actions||!actions.classList.contains('audio-actions')){
        actions=document.createElement('div');
        actions.className='audio-actions';
        field.insertAdjacentElement('afterend',actions);
      }

      const button=document.createElement('button');
      button.type='button';
      button.className='btn small';
      button.textContent='🎤 Ditado';
      actions.insertBefore(button,actions.firstChild);

      const status=document.createElement('div');
      status.className='recording';
      status.id='dictstatus_'+qid;
      actions.insertAdjacentElement('afterend',status);

      if(!SpeechRecognition){
        button.disabled=true;
        button.title='Ditado por voz não disponível neste navegador';
        return;
      }

      let recognition=null;
      let listening=false;
      let baseText='';

      const idle=()=>{
        listening=false;
        recognition=null;
        if(active===qid)active=null;
        button.textContent='🎤 Ditado';
      };

      button.onclick=()=>{
        if(window.recorder&&window.recorder.state==='recording'){
          alert('Finalize a gravação de áudio antes de iniciar o ditado.');
          return;
        }
        if(listening&&recognition){
          try{recognition.stop()}catch{}
          return;
        }
        if(active&&active!==qid){
          alert('Finalize o outro ditado primeiro.');
          return;
        }

        recognition=new SpeechRecognition();
        recognition.lang='pt-BR';
        recognition.interimResults=false;
        recognition.maxAlternatives=1;
        baseText=field.value.trim();

        recognition.onstart=()=>{
          listening=true;
          active=qid;
          button.textContent='■ Parar ditado';
          status.textContent='Ouvindo...';
        };
        recognition.onresult=e=>{
          const spoken=(e.results?.[0]?.[0]?.transcript||'').trim();
          if(spoken){
            field.value=[baseText,spoken].filter(Boolean).join(baseText&&spoken?' ':'');
            field.dispatchEvent(new Event('input',{bubbles:true}));
          }
        };
        recognition.onerror=e=>{
          status.textContent='Ditado: '+(e.error||'erro');
          idle();
        };
        recognition.onend=()=>{
          if(listening)status.textContent=field.value.trim()?'Ditado concluído':'Nenhuma fala reconhecida';
          idle();
        };
        try{recognition.start()}catch{
          status.textContent='Ditado indisponível';
          idle();
        }
      };
    });
  }

  enhance();
  new MutationObserver(enhance).observe(questions,{childList:true,subtree:true});
})();
