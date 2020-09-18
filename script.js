(function(){
    var para = document.createElement("p");
    var tNode = document.createTextNode("This is one of my first repositories for GitHub.");
    para.appendChild(tNode)
    var divContainer = document.getElementById("div1");
    divContainer.appendChild(para);

    otherRepo();
})();

function otherRepo(){
    var gitlabNode = document.createElement("p");
    gitlabNode.innerHTML = 'I tend to use GitLab instead.<br>Click <a href="https://gitlab.com/sayus61894" target="_blank">here</a> to go there.';
    var divContainer = document.getElementById("div1");
    divContainer.appendChild(gitlabNode);
}