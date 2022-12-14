import 'next-auth';
import { VerifyChallengeSolanaJSONResponse, VerifyChallengeEvmJSONResponse } from '@moralisweb3/auth';

declare module 'next-auth' {
  interface Session {
    user: VerifyChallengeSolanaJSONResponse | VerifyChallengeEvmJSONResponse;
  }
}
