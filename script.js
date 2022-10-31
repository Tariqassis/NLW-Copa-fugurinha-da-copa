let isExplore = true

function changeCard(event) {
    const card = event.currentTarget
    const bg = isExplore ? "explore" : "ignite"
    isExplore = !isExplore
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}