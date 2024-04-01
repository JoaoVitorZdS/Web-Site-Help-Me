import React from "react";
import "./style.css"; // Certifique-se de corrigir o caminho correto

const SocialSharer = () => {
  const handleFacebookShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, "_blank");
  };
  
  const handleDribbbleShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://dribbble.com/share?url=${postUrl}`, "_blank");
  };
  
  const handleWhatsAppShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${postUrl}`, "_blank");
  };
  
  const handleGitHubShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://github.com/share?url=${postUrl}`, "_blank");
  };
  
  const handleTwitterShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${postUrl}`, "_blank");
  };
  
  const handleRedditShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://reddit.com/submit?url=${postUrl}`, "_blank");
  };
  
  const handleDiscordShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://discord.com/api/oauth2/authorize?client_id=813847887657123594&permissions=8&scope=bot`, "_blank");
  };
  
  const handlePinterestShare = () => {
    const postUrl = encodeURIComponent(window.location.href);
    window.open(`https://pinterest.com/pin/create/button/?url=${postUrl}`, "_blank");
  };
  
  
  
  // No seu componente render:
  
  return (
    <div className="tooltip-wrapper">
  
    <div className="tooltip-container">
      <span className="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          className="bi bi-send-fill"
          viewBox="0 0 16 16"
        >
          <path
        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
      ></path>
        </svg>
      </span>
      <span className="tooltip1" onClick={() => {handleTwitterShare()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bi bi-twitter"
          viewBox="0 0 16 16"
        >
           <path
        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
      ></path>
        </svg>
      </span>
      <span className="tooltip2" onClick={() => {handleFacebookShare()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
      ></path>
        </svg>
      </span>
      <span className="tooltip4" onClick={() => {handleWhatsAppShare()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path
        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
      ></path>
        </svg>
      </span>
      
      <span className="tooltip5" onClick={() => {handlePinterestShare()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bi bi-pinterest"
          viewBox="0 0 16 16"
        >
         <path
        d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"
      ></path>
        </svg>
      </span>
     
      <span className="tooltip8" onClick={() => {handleRedditShare()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="bi bi-reddit"
          viewBox="0 0 16 16"
        >
           <path
        d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"
      ></path>
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"
      ></path>
        </svg>
      </span>
      <span className="tooltip9"> </span>
    </div>
    <h4 style={{margin: "0 15px"}}>Compartilhe este artigo!</h4>
    </div>
  );
};

export default SocialSharer;
