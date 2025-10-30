function percentTillGoal(p){
    return (Math.round(p * 10) / 100000000).toFixed(2)
}

const currentPoints = {
      'Noraaaaaaaa #1 Rise fan' : 692,
      'Vivociraptor': 119.5,
      'puzzles': 858890.5,
      'LoganRobo': 6577.625,
      'HonestMagpie': 103.25,
      'froolsy': 6,
      'krystalshuri25': 929,
      'brycec': 1,
      'castleoflight': 100
}

const sortedPoints = Object.entries(currentPoints).sort((a, b) => b[1] - a[1]);

const first = sortedPoints[0]
const second = sortedPoints[1]
const third = sortedPoints[2]
const rest = sortedPoints.slice(3)



document.getElementById('holds-all-boxes').insertAdjacentHTML("beforeend",`
    <div class="first">
        <h1 class="name-a">🥇 ${first[0]} </h1> 
        <h1 class="points-a">${first[1]} | ${percentTillGoal(first[1])}%</h1>
    </div>
    <div class="second">
        <h1 class="name-a">🥈 ${second[0]}</h1>  
        <h1 class="points-a">${second[1]} | ${percentTillGoal(second[1])}%</h1>
    </div>
    <div class="third">
        <h1 class="name-a">🥉 ${third[0]}</h1>  
        <h1 class="points-a">${third[1]} | ${percentTillGoal(third[1])}%</h1>
    </div>`)

rest.forEach(function(placeElement) {
    document.getElementById('holds-all-boxes').insertAdjacentHTML("beforeend",`
    <div class="box-a">
        <h1 class="name-a">${placeElement[0]}</h1>  
        <h1 class="points-a">${placeElement[1]} | ${percentTillGoal(placeElement[1])}%</h1>
    </div>`)
})












