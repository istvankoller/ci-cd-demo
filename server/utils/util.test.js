const path = require('path');
const mockPath = jest.mock('path');
const {getIndexFilePath} = require('./util');

mockPath.join = jest.fn((pathList)=> {
    'public/'
})

describe('File path metódus tesztelése', ()=> {
    console.log(getIndexFilePath('index.html'));
    test('String értéket ad vissza', ()=> {


        expect(typeof getIndexFilePath('index.html') === 'string').toBe(true)
    })

    test('File neve van az elérés végén', ()=> {

    })

})
