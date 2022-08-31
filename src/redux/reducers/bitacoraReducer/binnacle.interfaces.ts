import { Binnacle } from "../../../common/interfaces/binnacle";

export interface BinnacleState {
  binnacleList: Binnacle[];
  binnacleSelected: Binnacle;
  isBinnacleLoading: boolean;
}