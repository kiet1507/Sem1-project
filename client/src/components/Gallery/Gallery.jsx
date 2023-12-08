import classNames from 'classnames/bind';
import '../../../src/grid.scss';
import CarouselCard from '../CarouselCard/CarouselCard';
import styles from './Gallery.module.scss';
import data from './data_fake.json';

const cx = classNames.bind(styles);

const Gallery = () => {

    return (
        <>
            <div className="row">
                {
                    data.map((item, key) => {
                        return (
                            <a href='#' key={key} className={cx('list-gallery col c-4')}>
                                <div className={cx('gallery-item')}>
                                    <div className={cx('gallery-name')}>
                                        <h2 className={cx('post-title')}>{item.name}</h2>
                                    </div>
                                    <div className={cx('post-img')}>
                                        <img src={item.img} style={{ width: 100 }} alt={item.name} />
                                    </div>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
            <h2 className={cx('title__galleyry')}>Bộ sưu tập</h2>
            <div className={cx('carousel row')}>
                <div className={cx('carousel-img col c-3')}>
                    <img src="https://file.hstatic.net/1000284478/file/browserpreview_tmp__1__3ff17b17fdb043fa9b5bfe73cfa611ce.gif" alt=""/>
                </div>
                <div className={cx('carousel-card col c-9')}>
                    <CarouselCard/>
                </div>
            </div>
        </>
    );
}

export default Gallery;