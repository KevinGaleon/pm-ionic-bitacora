import { BinnaclesGroup } from "../../../common/interfaces/binnaclesGroup";

export interface BinnacleGroupState {
  binnacleGroupList: BinnaclesGroup[];
  binnacleGroupSelected: BinnaclesGroup;
  isBinnacleGroupLoading: boolean;
}