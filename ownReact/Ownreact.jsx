
function customElement(mainElement, root){
    const domElement = document.createElement(mainElement.type);
    domElement.innerHTML= mainElement.child;
    domElement.setAttribute('href', mainElement.props.href);
    domElement.setAttribute('target', mainElement.props.target);
    root.appendChild(domElement);
}
const mainElement = {
    type : 'a',
    props: {
        href : 'https://www.google.com/',
        target: '_blanks',
    },
    child : 'clicked here and open the page'
}

const root = document.getElementById('root');
customElement(mainElement, root);