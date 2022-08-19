/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;

        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change To Bangla' : 'Move To English'}
                </button>
                {show && <p>Change To Bangla is True</p>}
            </>
        );
    }
}

export default Button;
