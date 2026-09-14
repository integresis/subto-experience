(()=>{
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  const fields=['question_one','question_two','family_note'];
  let active=null;

  const style=document.createElement('style');
  style.textContent=`.dictation-actions{display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap}.dictation-btn{border:0;border-radius:10px;padding:10px 12px;background:#eaf0f7;color:#082657;font-weight:800;cursor:pointer}.dictation-btn.recording{background:#a52a2a;color:#fff}.dictation-status{font-size:12px;color:#68758a;font-weight:700}`;
  document.head.appendChild(style);

  const add=(name)=>{
    const field=document.querySelector(`textarea[name="${name}"]`);
    if(!field)return;
    const wrap=document.createElement('div');
    wrap.className='dictation-actions';
    const button=document.createElement('button');
    button.type='button';
    button.className='dictation-btn';
    button.textContent='🎤 Ditado';
    const status=document.createElement('span');
    status.className='dictation-status';
    wrap.append(button,status);
    field.insertAdjacentElement('afterend',wrap);

    if(!SpeechRecognition){
      button.disabled=true;
      status.textContent='Ditado não disponível neste navegador.';
      return;
    }

    let recognition=null,listening=false,baseText='';
    const reset=()=>{
      listening=false;
      recognition=null;
      if(active===name)active=null;
      button.textContent='🎤 Ditado';
      button.className='dictation-btn';
    };

    button.addEventListener('click',()=>{
      if(listening&&recognition){try{recognition.stop()}catch{}return;}
      if(active&&active!==name)return alert('Finalize o outro ditado primeiro.');
      recognition=new SpeechRecognition();
      recognition.lang='pt-BR';
      recognition.interimResults=false;
      recognition.maxAlternatives=1;
      baseText=field.value.trim();
      recognition.onstart=()=>{
        listening=true;
        active=name;
        button.textContent='■ Parar ditado';
        button.className='dictation-btn recording';
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
        reset();
      };
      recognition.onend=()=>{
        if(listening)status.textContent=field.value.trim()?'Ditado concluído':'Nenhuma fala reconhecida';
        reset();
      };
      try{recognition.start()}catch{
        status.textContent='Ditado indisponível';
        reset();
      }
    });
  };

  fields.forEach(add);
})();
