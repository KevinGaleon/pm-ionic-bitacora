import { BinnacleGroup } from "../../../common/interfaces/binnacleGroup";

export interface BinnacleGroupState {
  binnacleGroupList: BinnacleGroup[];
  binnacleGroupSelected: BinnacleGroup;
  isBinnacleGroupLoading: boolean;
}