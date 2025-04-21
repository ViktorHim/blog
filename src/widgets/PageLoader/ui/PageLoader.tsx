import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from 'shared/uikit/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.PageLoader, [className])}>
            <Loader />
        </div>
    );
};
