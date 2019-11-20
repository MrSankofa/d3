const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const makeFruit = type => ({ type });

const fruits = d3.range(5)
  .map(() => makeFruit('apple'));

const render = (selection, { fruits }) => {
  const circles = svg.selectAll('circle').data(fruits);

  circles
    .enter().append('circle')
    .attr('cx', (d, i) => i * 120 + 60)
    .attr('cy', height / 2)
    .attr('fill', '#c11d1d')
    .attr('r', 50);

  circles
    .exit().remove()
}

render(svg, { fruits })


// setInterval(() => {
//   fruits.push({ type: 'apple'});
// 	render(svg, { fruits });
// }, 1000)


d3.select('.add')
  .on('click', () => {
    console.log('clicked add button')
    fruits.push({ type: 'apple' })
    render(svg, { fruits })
    console.log('fruits', fruits)
  })

d3.select('.remove')
  .on('click', () => {
    console.log('clicked remove button')
    fruits.pop()
    render(svg, { fruits })
    console.log('fruits', fruits)
  })

