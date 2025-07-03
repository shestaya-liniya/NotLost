import { memo, useState } from '@teact';

import Icon from '../common/icons/Icon';
import Button from '../ui/Button';
import Transition from '../ui/Transition';

import styles from './GreetingsBlock.module.scss';

import featuresBanner from '../../assets/notlost-banner-features.svg';
import welcomeBanner from '../../assets/notlost-banner-welcome.svg';

const Intro = () => {
  return (
    <>
      <img src={welcomeBanner} className={styles.bannerWelcome} alt="Welcome to NotLost" />
      <div className={styles.content}>
        <div className={styles.paragraph}>
          <Icon name="boost-outline" />
          <div>
            We kicked off development in
            <span className={styles.accent}> May 2025 </span>
            — after months of thinking, prototyping, and testing ideas.
          </div>
        </div>
        <div className={styles.paragraph}>
          <Icon name="heart-outline" />
          <div>
            All with the mission to bring thoughtful features that make
            <span className={styles.accent}> Telegram work better </span>
            for people
            who live in it daily.
          </div>
        </div>
        <div className={styles.paragraph}>
          <Icon name="group" />
          <div>
            If you share our vision, join the
            <span className={styles.accent}> community </span>
            and let us know what you'd love to see in the future of NotLost.
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <img src={featuresBanner} className={styles.banner} alt="Features" />
      <div className={styles.content}>
        <div className={styles.paragraph}>
          <Icon name="folder" />
          <div>
            <span className={styles.accent}> Spaces </span>
            <div>
              Now you can create entire spaces with favorite chats,
              {' '}
              unlimited chat folders, useful links and notes (coming soon).
            </div>
          </div>
        </div>
        <div className={styles.paragraph}>
          <Icon name="link" />
          <div>
            <span className={styles.accent}> Embeded links </span>
            <div>
              You can add links into your space and they will open in app.
            </div>
          </div>
        </div>
        <div className={styles.paragraph}>
          <Icon name="forums" />
          <div>
            <span className={styles.accent}> Sidebar </span>
            <div>
              New sidebar at the left with predefined filters (unreads, channels etc.) to navigate more easily.
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

const GreetingsBlock = () => {
  const steps = ['intro', 'features'];
  const [step, setStep] = useState(steps[0]);

  const stepIndex = steps.indexOf(step);
  const nextStep = steps[stepIndex + 1];
  const prevStep = steps[stepIndex - 1];

  const isFirstStep = step === steps[0];
  const isLastStep = step === steps[steps.length - 1];

  const handlePrev = () => {
    if (isFirstStep) return undefined;
    setStep(steps[stepIndex - 1]);
  };

  const handleNext = () => {
    if (isLastStep) return undefined;
    setStep(steps[stepIndex + 1]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Transition activeKey={stepIndex} name="slideFade" shouldCleanup>
          {step === 'intro' && <Intro />}
          {step === 'features' && <Features />}
        </Transition>
      </div>
      <div className={styles.navigationButtons}>
        <div className={styles.leftButton}>
          {!isFirstStep && (
            <Button
              onClick={handlePrev}
              color="dark"
              size="tiny"
              noForcedUpperCase
              pill
              className={styles.button}
            >
              <Icon name="arrow-left" style="font-size: 0.875rem; margin-right: 0.25rem;" />
              {prevStep}
            </Button>
          )}
        </div>
        <div className={styles.rightButton}>
          {!isLastStep && (
            <Button
              onClick={handleNext}
              color="dark"
              size="tiny"
              noForcedUpperCase
              pill
              className={styles.button}
            >
              {nextStep}
              <Icon name="arrow-right" style="font-size: 0.875rem; margin-left: 0.25rem;" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(GreetingsBlock);
