import './style.css';
class Heading {
    render(){
        const x = 10;
        const head = document.createElement('h1');
        head.innerHTML = 'Webpack is awsomee';
        const body = document.querySelector('body');
        body.appendChild(head);
        
    }
}

export default Heading;