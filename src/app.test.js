const { dayOfTheWeek } = require('./app');


test('getDay retorna o formato certo dos dias da semana', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});