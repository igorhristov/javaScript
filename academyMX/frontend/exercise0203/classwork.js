const el = document.getElementById('root');

// document.title = 'Hello world!';
// console.log(document.location);

// const el1 = document.getElementsByClassName('unordered-list-item');
// const el1Arr = [ ...el1 ];
// console.log(
//     el1Arr
// );

// const el2 = document.querySelector('.unordered-list-item');
// console.log(el2);

// const el3 = document.querySelector('#root .paragraph2');
// console.log(el3);

// const el4 = document.querySelectorAll('#root .paragraph2');
// console.log([el4]);

// const imgs = document.querySelectorAll('#img-cnt img');
// console.log([ ...imgs ]);

// console.log(el.className);
// console.log(el.classList);
// console.log([ ...el.classList ]);

// console.log([ ...el.classList ].includes('dummy10'));

// if ([ ...el.classList ].includes('hide')) {
//     el.className = 'dummy1 dummy2';
// } else {
//     el.className = 'dummy1 dummy2 hide';
// }

const header = document.getElementById('header');

header.style.color = '#ff1111';
header.style.padding = '10px';
header.style.backgroundColor = 'gold';

header.innerHTML = '<p>Yay!</p>';


document.querySelector('.paragraph2').style.color = 'red';

console.log(
    el.querySelectorAll('.paragraph2')
)

const ul = document.createElement('ul');
ul.setAttribute('id', 'ul-id');

// const li1 = document.createElement('li');
// li1.setAttribute('id', 'li-1');
// li1.innerText = 'Item 1';

// const li2 = document.createElement('li');
// li2.setAttribute('id', 'li-2');
// li2.innerText = 'Item 2';

[1, 2].forEach(ix => {
    const li = document.createElement('li');
    li.setAttribute('id', `li-${ix}`);
    li.innerText = `Item ${ix}`;

    ul.append(li);
})

el.prepend(ul); 