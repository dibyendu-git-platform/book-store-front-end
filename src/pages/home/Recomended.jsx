import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';
import {  } from 'react';
import { useFetchAllBooksQuery } from '../../redux/features/book/bookApi';

const Recomended = () => {
    
    const { data: books = [], isError, isLoading } = useFetchAllBooksQuery();

    if (isLoading) return (<div>Loading...</div>);
    if (isError) return (<div>Error fetching book</div>);

    return (
        <div className="py-16">
        <h2 className='text-3xl font-semibold mb-6'>Recomended Books for You</h2>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}

            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1180 : {
                slidesPerView: 3,
                spaceBetween: 50,
            }
            }}

            modules={[Navigation]}
            className="mySwiper m-2"
            >
                { books.length > 0 && books.slice(8, 18).map((item, index) => <SwiperSlide key={index}><BookCard book={item}/></SwiperSlide> ) }
        </Swiper>
        </div>
    )
}

export default Recomended
