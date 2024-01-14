// Assets
import Illustration from './assets/illustration-article.svg'
import Avatar from './assets/image-avatar.webp'
// Componentes
import TagBloc from "./components/TagBlog"
import Card from "./components/Card"
import SubTitle from "./components/Subtitle"
import Title from "./components/Title"

const App = () => {
  return (
    <>
      <Card>
        <img src={ Illustration } className="rounded-xl w-full mx-auto my-4" />
        <TagBloc text="Learning" />
        <SubTitle text="Published 21 Dec 2023" />

        <Title>
          HTML & CSS foundations
        </Title>

        <p className='text-cs-grey font-semibold text-sm my-2'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className='flex items-center my-4'>
          <img src={ Avatar } alt="Profile photo of a person looking to the left"
            className='w-8'
          />
          <h3 className='font-extrabold mx-2'>
            Greg Hooper
          </h3>
        </div>
      </Card>
    </>
  )
}

export default App
