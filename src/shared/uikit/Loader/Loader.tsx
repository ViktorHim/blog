import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;
    return (
        <svg
            className={classNames(styles.Loader, [className])}
            viewBox="0 0 200 200"
        >
            <circle
                className={styles.dots}
                stroke-width="15"
                r="15"
                cx="40"
                cy="100"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.4"
                ></animate>
            </circle>
            <circle
                className={styles.dots}
                stroke-width="15"
                r="15"
                cx="100"
                cy="100"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="-.2"
                ></animate>
            </circle>
            <circle
                className={styles.dots}
                stroke-width="15"
                r="15"
                cx="160"
                cy="100"
            >
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="2"
                    values="1;0;1;"
                    keySplines=".5 0 .5 1;.5 0 .5 1"
                    repeatCount="indefinite"
                    begin="0"
                ></animate>
            </circle>
        </svg>
    );
};
