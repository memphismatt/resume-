document.addEventListener('DOMContentLoaded',function(){
  const copyBtn = document.getElementById('copy-linkedin');
  const linkedin = 'https://linkedin.com/in/matthew-malone-82b09099';
  if(copyBtn){
    copyBtn.addEventListener('click',async function(){
      try{
        await navigator.clipboard.writeText(linkedin);
        copyBtn.textContent = 'Copied';
        setTimeout(()=>copyBtn.textContent='🔗',1500);
      }catch(e){
        alert('LinkedIn URL: ' + linkedin);
      }
    });
  }
});
