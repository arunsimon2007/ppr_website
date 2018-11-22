import './style.scss';
class Button {
    cls = 'button';
    render(){
           const button = document.createElement('button');
           button.innerHTML = 'Click Me';
           button.classList.add(this.cls);
           const body = document.querySelector('body');

           body.appendChild(button);
    }
}

export default Button;