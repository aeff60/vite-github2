import './HomeBanner.css';

const bannerData = {
  title: 'Your Banner Title',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quidem totam, et similique voluptas in fuga esse, deserunt repellendus, delectus enim impedit veniam debitis magnam. Ullam nihil facilis corrupti exercitationem'
}


function Banner() {
  return (
    <div className='banner-bg'>
      <div className='container'>
        <div className='banner-con'>
          <div className='banner-text'>
            <h1>{bannerData.title}</h1>
            <p>
              {bannerData.desc}
            </p>
            <a href='#' className='banner-btn'>Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

