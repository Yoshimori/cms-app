import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { observer as originalObserver } from 'mobx-react-lite';

export type Component<P> = (props: P) => React.ReactElement | null;

export const observer = <P extends object>(
    componentName: string,
    baseComponent: Component<P>
): Component<P> => {

    const fn = (props: P): React.ReactElement | null => {
        const element = baseComponent(props);

        if (element === null) {
            return null;
        }

        //DOC: https://reactjs.org/docs/react-api.html#cloneelement

        return React.cloneElement(element, {
            'data-component': componentName,
            ...element.props
        });

    };

    fn.displayName = componentName;

    return originalObserver(fn);
};
