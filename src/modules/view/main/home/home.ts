import { CSSClassesEnum, ElementParams, TagEnum } from '../../../../types';
import InputFieldCreator from '../../../util/input-field/input-field';
import View from '../../view';

// TODO: to types
export const enum FieldText {
  FIELD_TEXT_ONE = 'поле для ввoдa1',
  FIELD_TEXT_TWO = 'поле для ввoдa2',
}

export default class Home extends View {
  firstfield = '';

  secondfield = '';

  constructor() {
    const data: ElementParams = {
      tag: TagEnum.section,
      className: CSSClassesEnum.HOME,
      textContent: '',
      callback: () => null,
    };

    super(data);

    this.configureView();
  }

  configureView(): void {
    const paramsFirstInput: ElementParams = {
      tag: TagEnum.input,
      className: CSSClassesEnum.input,
      textContent: FieldText.FIELD_TEXT_ONE,
      // @ts-ignore
      callback: (event: Event) => this.keyupHandler(event, this.firstfield),
    };

    let inputCreator = new InputFieldCreator(paramsFirstInput);
    this.elementCreator.addInnerElement(inputCreator.getElement() as HTMLElement);

    const paramsSecondInput: ElementParams = {
      tag: TagEnum.input,
      className: CSSClassesEnum.input,
      textContent: FieldText.FIELD_TEXT_TWO,
      // @ts-ignore
      callback: (event: Event) => this.keyupHandler(event, this.secondfield),
    };

    inputCreator = new InputFieldCreator(paramsSecondInput);
    this.elementCreator.addInnerElement(inputCreator.getElement() as HTMLElement);
  }

  keyupHandler(event: Event, fieldName: string): void {
    if (event.target instanceof HTMLInputElement) {
      // @ts-ignore
      this[fieldName] = event.target.value;
    }
  }
}
