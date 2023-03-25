let url = window.location.search.replace('?model=', '')

async function getModels()
{
    let response = await fetch('/assets/models.json')
    let models = await response.json()

}

getModels()

