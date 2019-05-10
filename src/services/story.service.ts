// import { Repository } from '../core/repository';
// import { StoryRepositoryResponseItem } from '../responses/story.repository.response';

// interface Reel {
//   [item: string]: [string];
// }

// export abstract class StoryService extends Repository {
//   // this method must call this.client.media.seen() under the hood
//   public abstract markSeen(
//     items: Array<StoryRepositoryResponseItem>,
//     module: string = 'feed_timeline',
//   ): Promise<{ status: string }>;
//   private abstract prepareReelsForMarkSeen(items: Array<StoryRepositoryResponseItem>, sourceId: string = null): Reel;
// }
