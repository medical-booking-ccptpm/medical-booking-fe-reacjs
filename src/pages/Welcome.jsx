import WelcomeSection from '../components/WelcomeSection';

const Welcome = ({ user }) => {
  return (
    <section className="flex">
      <div className="w-full xl:w-8/12">
        <WelcomeSection user={user} />
      </div>
    </section>
  );
};

export default Welcome;
