import { useState } from 'react'
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/book/bookApi';

const categories = ["Choose a genere", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {

    const [selectedCategory, setSelectedCategory] = useState("Choose a genere");
    
    const { data: books = [], isError, isLoading } = useFetchAllBooksQuery();

    const filteredBooks = selectedCategory === "Choose a genere" ? books : books.filter((book) => book.category === selectedCategory.toLocaleLowerCase() );

    if (isLoading) return (<div>Loading...</div>);
    if (isError) return (<div>Error fetching book</div>);

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/*  category filtering */}
            <div>
                <select 
                    name="category"
                    id="category"
                    onChange={(e) =>{ setSelectedCategory(e.target.value) }}
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => 
                        <option key={index} value={category}>
                            {category}
                        </option>)
                    }
                </select>
            </div>
            {/*  Books List */}
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
                className="mySwiper m-2">
                { filteredBooks.length > 0 && filteredBooks.map((item, index) => <SwiperSlide key={index}><BookCard book={item}/></SwiperSlide> ) }
            </Swiper>
        </div>
    )
}

export default TopSellers
