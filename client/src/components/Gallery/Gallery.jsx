import '../../../src/grid.scss';
import './Gallery.module.scss';
import data from './data_fake.json';

const Gallery = () => {

    return (
        <>
            <div className='list-gallery row'>
                {
                    data.map((item, key) => {
                        return (
                            <div key={key} className='gallery-item col c-4'>
                                <div className="gallery-name">
                                    <h2 className='post-title'>{item.name}</h2>
                                </div>
                                <div className="post-img">
                                    <img src={item.img} alt="" style={{width: 100}}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Gallery;