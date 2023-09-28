
const $ratings = document.querySelectorAll('.rating-numbers');
const $submitButton = document.querySelector('.submit');

const $ratingCard = document.querySelector('.rating');
const $thanksCard = document.querySelector('.tky');


const $selectedText = document.querySelector('.selection');

$ratings.forEach(element => {

    element.addEventListener('click', () => {
        for (let i = 0; i < $ratings.length; i++) {
            if ($ratings[i].classList.contains('selected')) {
                $ratings[i].classList.remove('selected');
            };
        }
        element.classList.add('selected');
    })
});

$submitButton.addEventListener('click', () => {
    $ratingCard.style.display = 'none'
    $thanksCard.style.display = 'block'
    const $selectedRanking = document.querySelector('.selected').innerHTML;
    $selectedText.innerHTML = `You selected ${$selectedRanking} out of 5`
})

