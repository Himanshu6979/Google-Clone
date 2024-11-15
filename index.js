const searchInput= document.querySelector("#search-input");
searchInput.addEventListener("keydown",function(event){
    if(event.code==="Enter"){
        search();
    }
});

function search(){
    const input=searchInput.value;
    window.location.href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCrPyzC3MEgyYPRizUjNyckHAEjXBoM&q=" + input + "&rlz=1C1CHBF_enIN965IN965&oq=" + input + "&gs_lcrp=EgZjaHJvbWUqCggBEC4YsQMYgAQyBggAEEUYOTIKCAEQLhixAxiABDIKCAIQABixAxiABDIQCAMQLhjHARixAxjRAxiABDIKCAQQABixAxiABDIHCAUQABiABDIQCAYQLhjHARixAxjRAxiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIHCAkQABiPAtIBCTM3MjdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
}
