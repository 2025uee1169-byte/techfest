const cube = document.getElementById("cube");

cube.addEventListener("click", () => {

    document.getElementById("intro").style.display = "none";

    document.getElementById("video-screen").style.display = "block";

    const video = document.getElementById("introVideo");

    video.play();

    video.onended = () => {

        const logo =
        document.getElementById("videoLogo");

        logo.style.opacity = "1";

        setTimeout(()=>{

            document.getElementById("video-screen")
            .style.display = "none";

            document.querySelector(".hero")
            .style.display = "block";

        },2500);

    };

});

const accommodationBtn =
document.getElementById("accommodationBtn");

const accommodationPanel =
document.getElementById("accommodation-panel");

const closeAccommodation =
document.getElementById("closeAccommodation");

accommodationBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    accommodationPanel.classList.add("active");

});

closeAccommodation.addEventListener("click",()=>{

    accommodationPanel.classList.remove("active");

});
function setupPanel(buttonId,panelId){

const btn=document.getElementById(buttonId);
const panel=document.getElementById(panelId);

if(!btn || !panel) return;

btn.addEventListener("click",(e)=>{

e.preventDefault();

panel.classList.add("active");

});

panel.querySelector(".closePanel")
.addEventListener("click",()=>{

panel.classList.remove("active");

});

}

setupPanel("aboutBtn","about-panel");

setupPanel("workshopBtn","workshop-panel");

setupPanel("competitionBtn","competition-panel");

setupPanel("sponsorBtn","sponsor-panel");

setupPanel("contactBtn","contact-panel");