import {
  MovesSpeedCaluclator,
  IDLE_SPEED,
  SLOWLY,
  MEDIUM,
  FAST,
  VERY_FAST,
  SLOWLY_BOOST,
  MEDIUM_BOOST,
  FAST_BOOST,
  VERY_FAST_BOOST,
} from "./moves-speed-caluclator";

describe(MovesSpeedCaluclator.name, () => {
  const idleVelocityVec = {
    x: 0,
    y: 0,
  };
  const velocityWithYVec = {
    x: 0,
    y: -1,
  };
  describe("calculateCurrentSpeedAndBoost", () => {
    it("should init default values correctly", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow: timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow,
      });
      expect(movesSpeedCaluclator.maxAgeOnSecondsInLastSpeeds).toEqual(3);
      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(0);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(IDLE_SPEED);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(0);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(velocityWithYVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150,
      );
    });
    it("should update speed stats given no moves happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(0);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(IDLE_SPEED);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(0);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150,
      );
    });

    it("should update speed stats given 1 move in 2 seconds interval happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.incrementDistanceTraveled();
      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(0.5);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(SLOWLY);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150 * SLOWLY_BOOST,
      );
    });

    it("should update speed stats given 2 moves in 2 seconds interval happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();

      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(1);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(MEDIUM);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150 * MEDIUM_BOOST,
      );
    });

    it("should update speed stats given 3 moves in 2 seconds interval happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();

      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(1.5);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(MEDIUM);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150 * MEDIUM_BOOST,
      );
    });

    it("should update speed stats given 4 moves in 2 seconds interval happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();

      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(2);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(FAST);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150 * FAST_BOOST,
      );
    });

    it("should update speed stats given 6 moves in 2 seconds interval happened", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();
      movesSpeedCaluclator.incrementDistanceTraveled();

      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });

      expect(movesSpeedCaluclator.averageMovesPerSecond).toEqual(3);
      expect(movesSpeedCaluclator.currentSpeedLabel).toEqual(VERY_FAST);
      expect(
        movesSpeedCaluclator.resolvePlayerYVelocity(idleVelocityVec),
      ).toEqual(-1);
      expect(movesSpeedCaluclator.resolveSpeed({ baseSpeed: 150 })).toEqual(
        150 * VERY_FAST_BOOST,
      );
    });
  });

  describe("secondsPassed", () => {
    const timeNow = new Date("2022-01-01 10:00:00").getTime();
    const movesSpeedCaluclator = new MovesSpeedCaluclator({
      timeNow,
      maxAgeOnSecondsInLastSpeeds: 3,
    });
    const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
    expect(
      movesSpeedCaluclator.secondsPassed({
        timeNow: time2SecondsLater,
        seconds: 2,
      }),
    ).toBeTruthy();

    movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
      timeNow: time2SecondsLater,
    });

    expect(
      movesSpeedCaluclator.secondsPassed({
        timeNow: time2SecondsLater,
        seconds: 2,
      }),
    ).toBeFalsy();

    const time4SecondsLater = new Date("2022-01-01 10:00:04").getTime();
    expect(
      movesSpeedCaluclator.secondsPassed({
        timeNow: time4SecondsLater,
        seconds: 2,
      }),
    ).toBeTruthy();
  });

  describe("lastSpeeds", () => {
    it("should handle lastSpeeds list correctly", () => {
      const timeNow = new Date("2022-01-01 10:00:00").getTime();
      const movesSpeedCaluclator = new MovesSpeedCaluclator({
        timeNow,
        maxAgeOnSecondsInLastSpeeds: 3,
      });

      expect(movesSpeedCaluclator.lastSpeeds.size).toEqual(0);

      // assuming the update happense every 1 second
      const time1SecondsLater = new Date("2022-01-01 10:00:01").getTime();
      const time2SecondsLater = new Date("2022-01-01 10:00:02").getTime();
      const time3SecondsLater = new Date("2022-01-01 10:00:03").getTime();
      const time4SecondsLater = new Date("2022-01-01 10:00:04").getTime();
      const time5SecondsLater = new Date("2022-01-01 10:00:04").getTime();

      // no diff in time, no new speed was recorded
      // to avoid division by 0
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: timeNow,
      });
      expect(movesSpeedCaluclator.lastSpeeds.size).toEqual(0);

      // first last time recorded
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time1SecondsLater,
      });
      expect(movesSpeedCaluclator.lastSpeeds.size).toEqual(1);

      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time2SecondsLater,
      });
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time3SecondsLater,
      });
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time4SecondsLater,
      });
      movesSpeedCaluclator.calculateCurrentSpeedAndBoost({
        timeNow: time5SecondsLater,
      });
      expect(movesSpeedCaluclator.lastSpeeds.size).toEqual(4);
    });
  });
});
