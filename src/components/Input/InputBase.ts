import { ComponentBase } from "@models/data.model";
import { InputProps, InputState } from "@components/Input/InputModel";
import { classNames } from "@styles-engine/api";

export const InputBase: ComponentBase<InputProps, InputState> = (ownerState) => {
  const defaultProps: InputProps = {
    label: '',
    inputId: '',
    disabled: false,
    placeholder: '',
    name: '',
    validation: {},
    showError: true,
    ...ownerState
  };

  return {
    defaultProps,
    css: {
      root: classNames("ui-input-root", {'ui-invalid': ownerState.errors}),
      input: "ui-input",
      label: 'ui-input-label',
      clearButton: 'ui-input-clear-button',
      error: 'ui-input-error-message',
    }
  }
}
