export {
  MovesSpeedCaluclator,
  IDLE_SPEED,
  SLOWLY,
  MEDIUM,
  FAST,
  VERY_FAST,
  IDLE_BOOST,
  SLOWLY_BOOST,
  MEDIUM_BOOST,
  FAST_BOOST,
  VERY_FAST_BOOST,
};

interface Vector2 {
  x: number;
  y: number;
}

const IDLE_SPEED = "IDLE";
const IDLE_BOOST = 0;
const SLOWLY = "SLOWLY";
const SLOWLY_BOOST = 1;
const MEDIUM = "MEDIUM";
const MEDIUM_BOOST = 5;
const FAST = "FAST";
const FAST_BOOST = 12;
const VERY_FAST = "VERY FAST";
const VERY_FAST_BOOST = 19;

export const normalizeSpeedAndBoost = (medianVel: number) => {
  if (medianVel > 0 && medianVel < 0.6) {
    return {
      speedLabel: SLOWLY,
      boost: SLOWLY_BOOST,
    };
  } else if (medianVel > 0.6 && medianVel < 1.6) {
    return {
      speedLabel: MEDIUM,
      boost: MEDIUM_BOOST,
    };
  } else if (medianVel > 1.6 && medianVel < 2.4) {
    return {
      speedLabel: FAST,
      boost: FAST_BOOST,
    };
  } else if (medianVel > 2.4) {
    return {
      speedLabel: VERY_FAST,
      boost: VERY_FAST_BOOST,
    };
  } else {
    return {
      speedLabel: IDLE_SPEED,
      boost: IDLE_BOOST,
    };
  }
};

const median = (vals: number[]) => {
  const sorted = vals.sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);

  if (sorted.length % 2) return sorted[half];

  return (sorted[half - 1] + sorted[half]) / 2.0;
};

type timeNowAndMaxAge = {
  timeNow: number;
  maxAgeOnSecondsInLastSpeeds: number;
};

class MovesSpeedCaluclator {
  _maxAgeOnSecondsInLastSpeeds: number;
  _lastSpeeds: Map<number, number>;
  _distanceTraveledInInterval: number;
  _intervalStartTime: number;
  _curSpeedBoost: number;
  _averageMovesPerSecond: number;
  _currentSpeedLabel: string;

  constructor({ timeNow, maxAgeOnSecondsInLastSpeeds }: timeNowAndMaxAge) {
    if (!timeNow) {
      throw Error(
        "[MovesSpeedCaluclator] you need to pass timeNow parama as Date.now()",
      );
    }
    if (!maxAgeOnSecondsInLastSpeeds) {
      throw Error(
        "[MovesSpeedCaluclator] you need to pass maxAgeOnSecondsInLastSpeeds parama as number",
      );
    }
    this._maxAgeOnSecondsInLastSpeeds = maxAgeOnSecondsInLastSpeeds;
    this._lastSpeeds = new Map();
    this._distanceTraveledInInterval = 0;
    this._intervalStartTime = timeNow;
    this._curSpeedBoost = 0;
    this._averageMovesPerSecond = 0.0;
    this._currentSpeedLabel = IDLE_SPEED;
  }

  calculateCurrentSpeedAndBoost({ timeNow }: { timeNow: number }) {
    if (!timeNow) {
      throw Error(
        "[MovesSpeedCaluclator] you need to pass timeNow parama as Date.now()",
      );
    }
    const timeElapsedInseconds = (timeNow - this._intervalStartTime) / 1000;
    if (timeElapsedInseconds === 0) {
      return;
    }
    const curVelocity = this._distanceTraveledInInterval / timeElapsedInseconds;
    this._lastSpeeds.set(timeNow, curVelocity);
    this._intervalStartTime = timeNow;
    this._distanceTraveledInInterval = 0;

    const medianVel = this._lastSpeeds.size
      ? median(Array.from(this._lastSpeeds.values()))
      : 0.0;
    const { speedLabel, boost } = normalizeSpeedAndBoost(medianVel);

    this._averageMovesPerSecond = medianVel;
    this._currentSpeedLabel = speedLabel;

    // cleanup lastSpeeds
    for (const timeOfPrevMove of this.lastSpeeds.keys()) {
      const secondsAgo = (timeNow - timeOfPrevMove) / 1000;
      if (secondsAgo > this.maxAgeOnSecondsInLastSpeeds) {
        this._lastSpeeds.delete(timeOfPrevMove);
      }
    }
    this._curSpeedBoost = boost;
  }

  incrementDistanceTraveled() {
    this._distanceTraveledInInterval += 1;
  }

  secondsPassed({ seconds, timeNow }: { seconds: number; timeNow: number }) {
    if (!timeNow) {
      throw Error(
        "[MovesSpeedCaluclator] you need to pass timeNow parama as Date.now()",
      );
    }
    if (!seconds) {
      throw Error("[MovesSpeedCaluclator] you need to pass seconds parama");
    }
    return (timeNow - this._intervalStartTime) / 1000 >= seconds;
  }

  resolveSpeed({ baseSpeed }: { baseSpeed: number }) {
    if (!baseSpeed) {
      throw Error("[MovesSpeedCaluclator] you need to pass baseSpeed parama");
    }
    return this._curSpeedBoost ? baseSpeed * this._curSpeedBoost : baseSpeed;
  }

  resolvePlayerYVelocity(normalizedVelocityVector: Vector2) {
    if (!normalizedVelocityVector) {
      throw Error(
        "[MovesSpeedCaluclator] you need to pass normalizedVelocityVector parama",
      );
    }
    return this._curSpeedBoost ? -1 : normalizedVelocityVector.y;
  }

  get averageMovesPerSecond() {
    return this._averageMovesPerSecond;
  }

  get currentSpeedLabel() {
    return this._currentSpeedLabel;
  }

  get lastSpeeds() {
    return this._lastSpeeds;
  }

  get maxAgeOnSecondsInLastSpeeds() {
    return this._maxAgeOnSecondsInLastSpeeds;
  }
}
