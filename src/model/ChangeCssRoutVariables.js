
export default function changeCssRoutVariables(theme) {
 
    const root = document.querySelector(':root')

    const components =[
        'body-bg',
        'text-color'
]
    components.forEach(component=>{
    root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`) 
})
   
    
}

