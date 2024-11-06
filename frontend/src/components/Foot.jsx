import React from 'react'
import footer from '../assets/images/footer.png'
import HeaderLogo from '../assets/images/HeaderLogo.png'
import media from '../assets/images/media.png'

const Foot = () => {
  return (
    <section className='padding' style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover', // Adjust to zoom out the image (e.g., 110% to zoom out)backgroundSize: 'cover',
        backgroundPosition: 'center'
      // Adjust -2rem to control the upward translation
        
      }}>
            <footer >

                <div className='flex flex-col justify-center items-center gap-6'>
                    <img src={HeaderLogo} alt="" />
                    <p className=' max-w-[50%] text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolores qui adipisci est quis, nemo animi cum inventore delectus aut sapiente voluptates minima fugiat vero aliquid quibusdam vel doloremque voluptatibus magni quod, corporis id ex? Eum odit beatae molestias eius labore debitis, aperiam, officiis repellat temporibus enim alias corrupti quis?</p>
                    <img src={media} alt="" />
                </div>
                <div class="container mx-auto text-center border-t border-gray-700 pt-8 mt-8">
                  <p class="text-gray-400">© Harselen2024.All rights reserved</p>
                 </div>
          
             </footer>
    </section>

  )
}

export default Foot