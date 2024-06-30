import "./App.css";

function App() {
  return (
    <div className="sm:p-20 p-5">
      <div className="sm:mb-10 mb-5">
        <img
          src={require("./assets/images/logo.png")}
          className="sm:w-2/12 w-3/12 sm:m-0 m-auto"
        />
      </div>
      <div className="bg-indigo-100 sm:p-10 p-5 rounded">
        <div className="text-center">
          <img
            src={require("./assets/images/marcy.png")}
            className="sm:w-2/12 w-5/12 m-auto mb-5"
          />
          <h1 className="sm:text-3xl text-xl font-bold mb-5">CatBytes</h1>
          <h2 className="sm:text-xl font-bold mb-5">
            Community for women in tech
          </h2>
        </div>
        <div className="sm:text-left text-center">
          <p>
            Hi! My name is Marina, I'm a self-taught full-stack developer from
            Kazakhstan, currently living and working in London as a Technical
            Lead.
            <br />
            <br /> I have launched a community called Catbytes, it is a
            community for women who want to study, work and develop in tech
            industry. Currently it is a private Discord server where we have
            LIVE sessions, tutorials, safe space where you can find friends.
            <br />
            <br />I also started new job in June 2024 and it is very challenging
            for me, I working all the time, without weekends until I feel
            comfortable with new projects, new team and new company in general.
            That's why for the next 3 months I have established a very strict
            schedule for myself that you can find below. I will only be
            available as per this schedule, so please forgive me if I don't
            reply in other times.
          </p>
        </div>
        <div className="mt-5 mb-5 rounded sm:text-left text-center">
          <h2 className="font-bold text-xl">CatBytes Schedule</h2>
          <p className="italic mb-5">Updated: 30 June 2024</p>
          <table className="bg-indigo-300 w-full rounded text-center">
            <thead>
              <tr>
                <th>Activity</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mentorship morning sessions</td>
                <td>Saturday | 10:00-11:00</td>
              </tr>
              <tr>
                <td>Mentorship evening sessions</td>
                <td>Sunday | 20:00-21:00</td>
              </tr>
              <tr>
                <td>CatBytes weekly LIVE session</td>
                <td>Sunday | 08:00-09:00</td>
              </tr>
              <tr>
                <td>Reply on Instagram and TikTok</td>
                <td>Sunday | 09:00-10:00</td>
              </tr>
            </tbody>
          </table>
          <p className="italic font-bold">Timesone: London, UK</p>
          <p className="mt-5 mb-2 text-left">
            Dear ladies, if you want to join CatBytes, send me a DM on TikTok
            (marina_webdev) or Instagram (marina_webdev):
          </p>
          <ul className="pl-5 text-left">
            <li>🌸 Your name</li>
            <li>🌸 Your email</li>
            <li>🌸 Why you want to join CatBytes?</li>
          </ul>
          <div className="text-left mt-5">
            <p>Best wishes,</p>
            <p>Marina</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
