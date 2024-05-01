export function intro() {
        document.querySelector('#intro .sign').classList.add('on')

        function hide() {
            document.querySelector('section#intro').style.display = "none"
        }
function show(){
    document.querySelectorAll('section:not(#intro)').forEach(function(sections){
        sections.classList.toggle('on')
    })}
        setTimeout(hide, 4000)
        setTimeout(show, 4000)

}