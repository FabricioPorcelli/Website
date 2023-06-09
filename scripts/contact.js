const $form = document.querySelector('.myForm')
const $buttonMailto = document.querySelector('#correo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href',`mailto:fabricioporcelli@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}