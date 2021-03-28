import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 App">

      <div class="container mx-auto py-20 lg:py-40 px-6">

        <header class="mb-10">
          <h1 class="font-mono text-lg text-yellow-300 mb-4">
            vaxhelp.nyc
          </h1>
          <h2 class="text-5xl lg:text-7xl text-white font-black mb-5 max-w-3xl">
            An NYC Guide to Getting Your Shot On
          </h2>
          <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
            With a little patience, it's easy to book an appointment at a New York State-run vaccination site. <span class="text-gray-200">Here's how we did it.</span>
          </p>
        </header>

        <div class="border border-gray-700 rounded-md p-7 max-w-lg mb-20 lg:mb-40">
          <h6 class="text-yellow-300 text-lg font-mono mb-2">
            FYI:
          </h6>
          <p class="text-lg text-gray-400 leading-relaxed">
            We're not doctors. We're simply trying to help people navigate clunky websites. Take these as suggestions - not professional, legal, or medical advice.
          </p>
        </div>

        <hr class="mb-20 lg:mb-40 border-gray-700" />

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Get started
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-8">
              Start by visiting New York State's vaccine eligibility website. Once you're there, click the <span class="font-mono font-bold text-yellow-300">Get Started</span> button.
            </p>
            <a class="group inline-block rounded font-medium text-lg text-white bg-gray-700 hover:bg-gray-600 transition-colors py-3 px-5 mb-8" href="https://am-i-eligible.covid19vaccine.health.ny.gov/">
              am-i-eligible.covid19vaccine.health.ny.gov <span class="opacity-60 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </a>
            <p class="text-lg text-gray-400 leading-relaxed max-w-3xl mb-8">
              Note: We've also seen success using sites like <a class="text-gray-200 underline hover:no-underline" href="https://www.turbovax.info/">TurboVax</a> and <a class="text-gray-200 underline hover:no-underline" href="https://nycvaccinelist.com/?includeDose=unspecified">NYC Vaccine List</a> &ndash; both of which aggregate available appointments. We're going to focus on New York State's website.
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/get-started.jpg" alt="Screenshot of the landing screen for New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Enter your info.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              <span class="text-gray-200">Note that locations are locked by zip code.</span> Pay attention to available appointments on the previous page. Your best bets are military-run, like <a class="text-gray-200 underline hover:no-underline" href="https://goo.gl/maps/PXZCvEekSM5H4foa8">Javits</a> and <a class="text-gray-200 underline hover:no-underline" href="https://goo.gl/maps/BMJcbG7LVSbiYPKSA">Medgar Evers</a>.
            </p>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              If you're younger than New York's eligibility threshold, you will have to confirm a comorbidity or underlying condition.
            </p>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              <span class="text-gray-200">Fib about either of these and skip the line at your own discretion.</span> Some locations will ask for documentation. Others won't. Either way, don't be an asshole.
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/enter-info.jpg" alt="Screenshot for entering your personal information on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Confirm your eligibility.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              If you're eligible, you'll see this screen. Click on the <span class="font-mono font-bold text-yellow-300">Locate Providers</span> button.
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/confirm-eligibility.jpg" alt="Screenshot confirming your eligibility on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Choose a location.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              Based on your zip code, you'll see available vaccine sites. Choose a location and click on its corresponding <span class="font-mono font-bold text-yellow-300">Schedule your vaccine appointment</span> link.
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/choose-location.jpg" alt="Screenshot choosing a location on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Refresh if you need to.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              You might see a page like this. If no appointments are available, refresh the page. Refresh it again. And again. <span class="text-gray-200">It could take awhile &ndash; five or ten minutes, from our experience.</span>
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/no-appointments-available.jpg" alt="Screenshot showing no appointments available on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Keep refreshing until you get to this page.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              If you're lucky, one of your page refreshes will lead to an appointment. Success!
            </p>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              Note &ndash; when you get to this page it will only be for the dates listed. Look closely. <span class="text-gray-200">If you want a different date, you'll need to return to the previous step and repeat.</span>
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/appointment-option.jpg" alt="Screenshot of an appointment option on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Grab that appointment.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              Once you're offered a date that works for you, click the <span class="font-mono font-bold text-yellow-300">Select Visit Time</span> button.
            </p>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              You may be offered multiple vaccine sites to choose from. <span class="text-gray-200">Try scrolling down.</span>
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/select-appointment-option.jpg" alt="Screenshot of an appointment option on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Choose your time.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              The next screen should look like this. If it does, press the radio button in the <span class="font-mono font-bold text-yellow-300">Select Time</span> column. Then click the <span class="font-mono font-bold text-yellow-300">Next</span> button.
            </p>
          </div>
          <div>
          <img class="rounded-3xl w-full" src="images/select-time.jpg" alt="Screenshot choosing an appointment on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              If you see a page without an appointment slot...
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-6">
              You might see a screen with no available appointments to choose from. If the page looks like this, you must press the <span class="font-mono font-bold text-yellow-300">Previous</span> button and re-press the <span class="font-mono font-bold text-yellow-300">Select Visit Time</span> button from the previous step.
            </p>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              <span class="text-gray-200">Don't refresh the page!</span> It's important you click on the buttons. And be patient (again) &ndash; we've seen this take up to 45 minutes.
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/no-appointment-slot.jpg" alt="Screenshot showing a bug where no appointments load on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Confirm your appointment.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              If you clicked the <span class="font-mono font-bold text-yellow-300">Next</span> button fast enough, you'll see this form. It's smooth sailing from here!
            </p>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/final-form.jpg" alt="Screenshot showing the appointment confirmation form on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <section class="lg:flex flex-row items-center mb-20 lg:mb-40">
          <div class="mb-10 lg:mb-0 lg:mr-20">
            <h2 class="text-4xl text-white font-black max-w-3xl mb-8">
              Fill out one last form after scheduling your appointment.
            </h2>
            <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mb-8">
              You've made an appointment after filling out the form in the previous step, but you still need to submit one last form. You can do that here, only after getting an appointment in the previous step:
            </p>
            <a class="group inline-block rounded font-medium text-lg text-white bg-gray-700 hover:bg-gray-600 transition-colors py-3 px-5" href="https://forms.ny.gov/s3/vaccine">
            forms.ny.gov/s3/vaccine <span class="opacity-60 group-hover:opacity-100 transition-opacity">&rarr;</span>
            </a>
          </div>
          <div>
            <img class="rounded-3xl w-full" src="images/submit-form.jpg" alt="Screenshot showing a form submission on New York State's COVID-19 vaccination portal" />
          </div>
        </section>

        <hr class="mb-20 lg:mb-40 border-gray-700" />

        <footer class="mb-10">
          <h2 class="text-5xl lg:text-7xl text-white font-black mb-5 max-w-3xl">
            Good luck!
          </h2>
          <p class="text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl">
            For more information or vaccine info outside of NYC, <a class="text-gray-200 underline hover:no-underline" href="https://goo.gl/maps/PXZCvEekSM5H4foa8">visit the CDC</a>.
          </p>
        </footer>

        <div class="border border-gray-700 rounded-md p-7 max-w-lg">
          <p class="font-medium text-lg text-gray-400 leading-relaxed">
            vaxhelp.nyc is a project by <a href="https://twitter.com/sleepingplanes" class="text-gray-200 underline hover:no-underline">Jeremy Perez-Cruz</a> and <a href="https://twitter.com/aaronshapiro" class="text-gray-200 underline hover:no-underline">Aaron Shapiro</a>. Thanks for visiting.
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;
