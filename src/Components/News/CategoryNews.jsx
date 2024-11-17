import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard';

export default function CategoryNews() {
    const { data: news } = useLoaderData();
    console.log(news);
    
    
    
  return (
    <>
    <div>
        {news.map((item, index) => <NewsCard key={index} item={item}></NewsCard>)}
    </div>
    </>
)
}
