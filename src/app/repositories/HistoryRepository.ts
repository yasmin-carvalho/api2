import { EntityRepository, Repository } from "typeorm";
import { HistoryModel } from "../models/HistoryModel";

@EntityRepository(HistoryModel)
class HistoryRepository extends Repository<HistoryModel> {}

export { HistoryRepository }
