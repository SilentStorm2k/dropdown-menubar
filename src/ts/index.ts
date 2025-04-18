import { dropDownMenu } from './dropdown-menubar';

const body = document.querySelector('body');

const menu1 = dropDownMenu('Menu Title');
menu1.addOption({
    optionTitle: '1: Prints G',
    clickHandler: () => {
        console.log('G');
    },
});

menu1.addOption({
    optionTitle: '2: Prints G -> GG',
    clickHandler: () => {
        console.log('G');
    },
});

menu1.modifyOption(2, {
    clickHandler: () => {
        console.log('GG');
    },
});

menu1.addOption({
    optionTitle: '3: Does nothing',
    clickHandler: () => {},
});

menu1.addOption({
    optionTitle: '4: Reloads page',
    clickHandler: () => {
        location.reload();
    },
});

menu1.setMaxWidth(10);

body?.appendChild(menu1.getElement());
