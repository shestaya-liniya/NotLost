import captureKeyboardListener from './captureKeyboardListeners';

type IHandlerFunction = () => void;

export default function captureEnterKeyListener(handler: IHandlerFunction) {
  return captureKeyboardListener({ onEnter: handler });
}
