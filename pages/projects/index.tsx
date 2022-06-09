import Card from '../../components/common/card';

export default function Projects() {
  return (
    <div className="p-4 flex flex-wrap overflow-y-auto">
      <Card href="a-landing-page" src="/images/landing.jpg" title="A Simple Landing Page">
        Click the button to watch on Jetflix app
      </Card>
      <Card href="arrays-loops" src="/images/loops.jpg" title="Writing Browser Loops">
        Click the button to watch on Jetflix app
      </Card>
      <Card href="first-js" src="/images/shoes.jpg" title="Shoe ShopIn">
        Click the button to watch on Jetflix app
      </Card>

      <Card href="intro-javascript" src="/images/reviews.jpg" title="Game Review">
        Click the button to watch on Jetflix app
      </Card>
      <Card href="disney" src="/images/disney.jpg" title="Disney API">
        Click the button to watch on Jetflix app
      </Card>
    </div>
  );
}
