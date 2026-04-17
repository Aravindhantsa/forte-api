import {
  repository
} from '@loopback/repository';
import {
  getModelSchemaRef,
  HttpErrors,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {FedexClsFacAr} from '../models';
import {
  BusinessRulesRepository,
  DirectionMatrixRepository,
  FedexAdditionalRateRepository,
  FedexAdjustArRepository,
  FedexClsFacArRepository,
  FedexDeliveryChargeRepository,
  FedexMatrixAdjAr0Repository,
  FedexMatrixAdjAr10Repository,
  FedexMatrixAdjAr1Repository,
  FedexMatrixAdjAr2Repository,
  FedexMatrixAdjAr3Repository,
  FedexMatrixAdjAr4Repository,
  FedexMatrixAdjAr5Repository,
  FedexMatrixAdjAr6Repository,
  FedexMatrixAdjAr7Repository,
  FedexMatrixAdjAr8Repository,
  FedexMatrixAdjAr9Repository,
  FedexMatrixRbAr0Repository,
  FedexMatrixRbAr10Repository,
  FedexMatrixRbAr1Repository,
  FedexMatrixRbAr2Repository,
  FedexMatrixRbAr3Repository,
  FedexMatrixRbAr4Repository,
  FedexMatrixRbAr5Repository,
  FedexMatrixRbAr6Repository,
  FedexMatrixRbAr7Repository,
  FedexMatrixRbAr8Repository,
  FedexMatrixRbAr9Repository,
  FedexRateArRepository,
  FedexZipBaseArRepository,
  RecentRatesRepository
} from '../repositories';

export class FedexClsFacArController {
  private matrixRepoMap: Record<string, any>;
  private matrixAdjRepoMap: Record<string, any>;
  constructor(
    @repository(FedexClsFacArRepository) public fedexClsFacArRepository: FedexClsFacArRepository,
    @repository(BusinessRulesRepository) public businessRulesRepository: BusinessRulesRepository,
    @repository(DirectionMatrixRepository) public directionMatrixRepository: DirectionMatrixRepository,
    @repository(FedexZipBaseArRepository) public fedexZipBaseArRepository: FedexZipBaseArRepository,
    @repository(FedexMatrixRbAr0Repository) public fedexMatrixRbAr0Repository: FedexMatrixRbAr0Repository,
    @repository(FedexMatrixRbAr1Repository) public fedexMatrixRbAr1Repository: FedexMatrixRbAr1Repository,
    @repository(FedexMatrixRbAr2Repository) public fedexMatrixRbAr2Repository: FedexMatrixRbAr2Repository,
    @repository(FedexMatrixRbAr3Repository) public fedexMatrixRbAr3Repository: FedexMatrixRbAr3Repository,
    @repository(FedexMatrixRbAr4Repository) public fedexMatrixRbAr4Repository: FedexMatrixRbAr4Repository,
    @repository(FedexMatrixRbAr5Repository) public fedexMatrixRbAr5Repository: FedexMatrixRbAr5Repository,
    @repository(FedexMatrixRbAr6Repository) public fedexMatrixRbAr6Repository: FedexMatrixRbAr6Repository,
    @repository(FedexMatrixRbAr7Repository) public fedexMatrixRbAr7Repository: FedexMatrixRbAr7Repository,
    @repository(FedexMatrixRbAr8Repository) public fedexMatrixRbAr8Repository: FedexMatrixRbAr8Repository,
    @repository(FedexMatrixRbAr9Repository) public fedexMatrixRbAr9Repository: FedexMatrixRbAr9Repository,
    @repository(FedexMatrixRbAr10Repository) public fedexMatrixRbAr10Repository: FedexMatrixRbAr10Repository,
    @repository(FedexMatrixAdjAr0Repository) public fedexMatrixAdjAr0Repository: FedexMatrixAdjAr0Repository,
    @repository(FedexMatrixAdjAr1Repository) public fedexMatrixAdjAr1Repository: FedexMatrixAdjAr1Repository,
    @repository(FedexMatrixAdjAr2Repository) public fedexMatrixAdjAr2Repository: FedexMatrixAdjAr2Repository,
    @repository(FedexMatrixAdjAr3Repository) public fedexMatrixAdjAr3Repository: FedexMatrixAdjAr3Repository,
    @repository(FedexMatrixAdjAr4Repository) public fedexMatrixAdjAr4Repository: FedexMatrixAdjAr4Repository,
    @repository(FedexMatrixAdjAr5Repository) public fedexMatrixAdjAr5Repository: FedexMatrixAdjAr5Repository,
    @repository(FedexMatrixAdjAr6Repository) public fedexMatrixAdjAr6Repository: FedexMatrixAdjAr6Repository,
    @repository(FedexMatrixAdjAr7Repository) public fedexMatrixAdjAr7Repository: FedexMatrixAdjAr7Repository,
    @repository(FedexMatrixAdjAr8Repository) public fedexMatrixAdjAr8Repository: FedexMatrixAdjAr8Repository,
    @repository(FedexMatrixAdjAr9Repository) public fedexMatrixAdjAr9Repository: FedexMatrixAdjAr9Repository,
    @repository(FedexMatrixAdjAr10Repository) public fedexMatrixAdjAr10Repository: FedexMatrixAdjAr10Repository,
    @repository(FedexAdjustArRepository) public fedexAdjustArRepository: FedexAdjustArRepository,
    @repository(FedexRateArRepository) public fedexRateArRepository: FedexRateArRepository,
    @repository(RecentRatesRepository) public recentRatesRepository: RecentRatesRepository,
    @repository(FedexAdditionalRateRepository) public fedexAdditionalRateRepository: FedexAdditionalRateRepository,
    @repository(FedexDeliveryChargeRepository) public fedexDeliveryChargeRepository: FedexDeliveryChargeRepository,
  ) {
    this.matrixRepoMap = {
      '0': this.fedexMatrixRbAr0Repository,
      '1': this.fedexMatrixRbAr1Repository,
      '2': this.fedexMatrixRbAr2Repository,
      '3': this.fedexMatrixRbAr3Repository,
      '4': this.fedexMatrixRbAr4Repository,
      '5': this.fedexMatrixRbAr5Repository,
      '6': this.fedexMatrixRbAr6Repository,
      '7': this.fedexMatrixRbAr7Repository,
      '8': this.fedexMatrixRbAr8Repository,
      '9': this.fedexMatrixRbAr9Repository,
      'default': this.fedexMatrixRbAr10Repository,
    };
    this.matrixAdjRepoMap = {
      '0': this.fedexMatrixAdjAr0Repository,
      '1': this.fedexMatrixAdjAr1Repository,
      '2': this.fedexMatrixAdjAr2Repository,
      '3': this.fedexMatrixAdjAr3Repository,
      '4': this.fedexMatrixAdjAr4Repository,
      '5': this.fedexMatrixAdjAr5Repository,
      '6': this.fedexMatrixAdjAr6Repository,
      '7': this.fedexMatrixAdjAr7Repository,
      '8': this.fedexMatrixAdjAr8Repository,
      '9': this.fedexMatrixAdjAr9Repository,
      'default': this.fedexMatrixAdjAr10Repository,
    };
  }

  @post('/fedex-cls-fac-ars/fedexArRate')
  async fedexApRate(@requestBody({
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['origin', 'destination', 'class', 'weight', 'originState', 'destinationState', 'originCity', 'destinationCity', 'companyId'],
          properties: {
            origin: {type: 'string'},
            destination: {type: 'string'},
            classWeight: {
              type: 'array',
              items: {
                type: 'object',
                required: ['class', 'weight'],
                properties: {
                  class: {type: 'string'},
                  weight: {type: 'number'},
                },
              },
            },
            originState: {type: 'string'},
            destinationState: {type: 'string'},
            originCity: {type: 'string'},
            destinationCity: {type: 'string'},
            companyId: {type: 'number'}
          },
        },
      },
    },
  }) calcDetails: {origin: string; destination: string; classWeight: [{class: string; weight: number}]; originState: string; destinationState: string; originCity: string; destinationCity: string}) {
    const result = {...calcDetails} as any;
    const directionMatrix = await this.directionMatrixRepository.findOne({where: {originState: calcDetails.originState, destinationState: calcDetails.destinationState, }, });
    result.shipType = directionMatrix?.direction ?? 'N';
    result.category = 'AR';
    result.fpProfileRate = await this.discountDetail(result, 'FEDEX PRIORITY');
    result.feProfileRate = await this.discountDetail(result, 'FEDEX ECONOMY');
    const [originZipBase, destinationZipBase] = await Promise.all([
      this.fedexZipBaseArRepository.findOne({where: {zipCode: calcDetails.origin}}),
      this.fedexZipBaseArRepository.findOne({where: {zipCode: calcDetails.destination}}),
    ]);

    if (!originZipBase) {
      throw new HttpErrors.NotFound('Origin Base Zip Not Found');
    }
    if (!destinationZipBase) {
      throw new HttpErrors.NotFound('Destination Base Zip Not Found');
    }
    Object.assign(result, {
      originBaseZipCode: originZipBase.originBaseZipCode,
      originRBNOAddOn: originZipBase.originRBNOAddOn,
      originAdjScale: originZipBase.originAdjScale,
      destinationBaseZipCode: destinationZipBase.destinationBaseZipCode,
      destinationRBNOAddOn: destinationZipBase.destinationRBNOAddOn,
      destinationAdjScale: destinationZipBase.destinationAdjScale,
    });

    const zipPrefix = String(result.originBaseZipCode).charAt(0);

    const repo = this.matrixRepoMap[zipPrefix] ?? this.matrixRepoMap['default'];

    const matrixDetail = await repo.findOne({where: {originBaseZipcode: result.originBaseZipCode, destinationBaseZipcode: result.destinationBaseZipCode, }, });

    if (!matrixDetail) {
      throw new HttpErrors.NotFound('RateBaseNumber not found');
    }
    result.matrixRateBaseNumber = matrixDetail.RateBaseNumber;
    let rateBaseNumber = Number(matrixDetail.RateBaseNumber) + Number(result.originRBNOAddOn) + Number(result.destinationRBNOAddOn);
    result.rateBaseNumber = rateBaseNumber.toString().padStart(6, '0');
    let totalWeight = 0;

    if (Array.isArray(result.classWeight)) {
      for (const cw of result.classWeight) {
        totalWeight += Number(cw.weight || 0);
      }
    }

    result.totalWeight = totalWeight;

    let minChargeRange: string;
    let AdjustRateAdj: string;

    if (totalWeight > 0 && totalWeight <= 300) {
      minChargeRange = 'minCharge300lbs';
      AdjustRateAdj = 'mcAdj300lb';
    } else if (totalWeight <= 400) {
      minChargeRange = 'minCharge400lbs';
      AdjustRateAdj = 'mcAdj400lb';
    } else if (totalWeight <= 500) {
      minChargeRange = 'minCharge500lbs';
      AdjustRateAdj = 'mcAdj500lb';
    } else {
      minChargeRange = 'minCharge501lbs';
      AdjustRateAdj = 'mcAdj501lb';
    }

    result.minChargeRange = minChargeRange;
    result.AdjustRateAdj = AdjustRateAdj;

    let dwWeightRange: string[] = [];
    let DWclassificationFactor: string[] = [];
    let nextRange: number[] = [];

    if (totalWeight < 500) {
      dwWeightRange = ['l5cRate', 'm5cRate', 'm1mRate', 'm2mRate', 'm5mRate', 'm10mRate'];
      DWclassificationFactor = ['l5cFactor', 'm5cFactor', 'm1mFactor', 'm2mFactor', 'm5mFactor', 'm10mFactor'];
      nextRange = [500, 1000, 2000, 5000, 10000, 20000];
    } else if (totalWeight < 1000) {
      dwWeightRange = ['m5cRate', 'm1mRate', 'm2mRate', 'm5mRate', 'm10mRate'];
      DWclassificationFactor = ['m5cFactor', 'm1mFactor', 'm2mFactor', 'm5mFactor', 'm10mFactor'];
      nextRange = [1000, 2000, 5000, 10000, 20000];
    } else if (totalWeight < 2000) {
      dwWeightRange = ['m1mRate', 'm2mRate', 'm5mRate', 'm10mRate'];
      DWclassificationFactor = ['m1mFactor', 'm2mFactor', 'm5mFactor', 'm10mFactor'];
      nextRange = [2000, 5000, 10000, 20000];
    } else if (totalWeight < 5000) {
      dwWeightRange = ['m2mRate', 'm5mRate', 'm10mRate'];
      DWclassificationFactor = ['m2mFactor', 'm5mFactor', 'm10mFactor'];
      nextRange = [5000, 10000, 20000];
    } else if (totalWeight < 10000) {
      dwWeightRange = ['m5mRate', 'm10mRate'];
      DWclassificationFactor = ['m5mFactor', 'm10mFactor'];
      nextRange = [10000, 20000];
    } else if (totalWeight < 20000) {
      dwWeightRange = ['m10mRate', 'm20mRate'];
      DWclassificationFactor = ['m10mFactor', 'm20mFactor'];
      nextRange = [20000, 30000];
    } else if (totalWeight < 30000) {
      dwWeightRange = ['m30mRate'];
      DWclassificationFactor = ['m30mFactor'];
      nextRange = [40000];
    } else if (totalWeight < 40000) {
      dwWeightRange = ['m40mRate'];
      DWclassificationFactor = ['m40mFactor'];
      nextRange = [40000];
    }

    result.dwWeightRange = dwWeightRange;
    result.DWclassificationFactor = DWclassificationFactor;
    result.nextRange = nextRange;

    const origin3digit = String(result.origin).substring(0, 3);
    const dest3digit = String(result.destination).substring(0, 3);

    // first digit of origin 3-digit ZIP
    const originZipRange = origin3digit.charAt(0);

    const repoAdj = this.matrixAdjRepoMap[originZipRange] ?? this.matrixAdjRepoMap['default'];

    const matrixAdjDetail = await repoAdj.findOne({where: {originBaseZipcode: origin3digit, destinationBaseZipcode: dest3digit, }, });

    if (matrixAdjDetail) {
      result.adjTableNumber = matrixAdjDetail.adjTableNumber;
      const fedexAdjustDatas = await this.fedexAdjustArRepository.find();
      if (!fedexAdjustDatas || fedexAdjustDatas.length === 0) {
        throw new HttpErrors.NotFound('FedexAdjust data not found');
      }
      return this.findRateWithAdjust(result, fedexAdjustDatas);
    } else {
      return this.findRate(result);
    }
    //return result;
  }

  private async findRateWithAdjust(
    result: any,
    fedexAdjustDatas: any[],
  ) {
    // ======================================================
    // 1️⃣ PREPARE ADJUSTMENT SCALES
    // ======================================================
    const originAdjScale = Number(result.originAdjScale);
    const destinationAdjScale = Number(result.destinationAdjScale);
    const matrixAdjScale = Number(String(result.adjTableNumber).substr(0, 6));

    let originAdjustmentType = 0;
    let destinationAdjustmentType = 0;

    let adjOriginRate = 1;
    let adjDestinationRate = 1;
    let adjMatrixRate = 1;

    let originRateAdj = 1;
    let destinationRateAdj = 1;

    // ======================================================
    // 2️⃣ ORIGIN ADJUSTMENT
    // ======================================================
    if (originAdjScale !== 0) {
      const originAdj = fedexAdjustDatas.find(
        e => e.adjustmentTableNumber == originAdjScale,
      );

      if (originAdj) {
        originAdjustmentType = originAdj.adjustmentType;
        const h = originAdj.mcAdj501lb;

        if (originAdjustmentType === 2) {
          const val = Number(h);
          adjOriginRate = Number(
            `${String(val).slice(0, -2)}.${String(val).slice(-2)}`
          );

          const rtAdj = originAdj.rtAdj.substr(0, 6);
          originRateAdj = Number(
            `${rtAdj.slice(0, 2)}.${rtAdj.slice(2)}`
          );
        } else {
          adjOriginRate = Number(
            `${h.slice(0, 2)}.${h.slice(2)}`
          );
          if (Math.floor(adjOriginRate) === 0) adjOriginRate = 1;
        }
      }
    }

    // ======================================================
    // 3️⃣ DESTINATION ADJUSTMENT
    // ======================================================
    if (destinationAdjScale !== 0) {
      const destAdj = fedexAdjustDatas.find(
        e => e.adjustmentTableNumber == destinationAdjScale,
      );

      if (destAdj) {
        destinationAdjustmentType = destAdj.adjustmentType;
        const o = destAdj.mcAdj501lb;

        if (destinationAdjustmentType === 2) {
          const val = Number(o);
          adjDestinationRate = Number(
            `${String(val).slice(0, -2)}.${String(val).slice(-2)}`
          );

          const rtAdj = destAdj.rtAdj.substr(0, 6);
          destinationRateAdj = Number(
            `${rtAdj.slice(0, 2)}.${rtAdj.slice(2)}`
          );
        } else {
          adjDestinationRate = Number(
            `${o.slice(0, 2)}.${o.slice(2)}`
          );
          if (Math.floor(adjDestinationRate) === 0) adjDestinationRate = 1;
        }
      }
    }

    // ======================================================
    // 4️⃣ MATRIX ADJUSTMENT
    // ======================================================
    if (matrixAdjScale !== 0) {
      const matrixAdj = fedexAdjustDatas.find(
        e => e.adjustmentTableNumber == matrixAdjScale,
      );

      if (matrixAdj) {
        const val = matrixAdj[result.AdjustRateAdj];
        adjMatrixRate = Number(
          `${val.slice(0, 2)}.${val.slice(2)}`
        );
      }
    }

    // ======================================================
    // 5️⃣ FETCH RATE TABLE
    // ======================================================
    const rateBaseNumber = String(result.rateBaseNumber).substr(0, 6);

    const rateRow = await this.fedexRateArRepository.findOne({where: {rateBaseNumber}, });

    if (!rateRow) {
      throw new HttpErrors.NotFound('Rate not found');
    }

    // ======================================================
    // 6️⃣ MIN CHARGE CALCULATION
    // ======================================================
    const minChargeRaw = (rateRow as any)[result.minChargeRange];
    const minCharge = Number(
      `${minChargeRaw.slice(0, 4)}.${minChargeRaw.slice(4)}`
    );

    let minCharges = 0;

    if (originAdjustmentType === 2 && destinationAdjustmentType === 2) {
      minCharges = (minCharge + adjOriginRate + adjDestinationRate) * adjMatrixRate;
    } else if (originAdjustmentType === 2) {
      minCharges = (minCharge + adjOriginRate) * adjMatrixRate * adjDestinationRate;
    } else if (destinationAdjustmentType === 2) {
      minCharges = (minCharge + adjDestinationRate) * adjMatrixRate * adjOriginRate;
    } else {
      minCharges = minCharge * adjOriginRate * adjDestinationRate * adjMatrixRate;
    }

    result.minCharges = minCharges.toFixed(2);

    // ======================================================
    // 7️⃣ CLASS WEIGHT RATE CALCULATION
    // ======================================================
    const classRates = await Promise.all(
      result.classWeight.map(async (cw: {class: string; weight: number}) => {
        let cls = cw.class;
        if (cls === '77') cls = '0775';
        else if (cls === '92') cls = '0925';
        else cls = cls.toString().padStart(3, '0') + '0';

        const clsFac = await this.fedexClsFacArRepository.findOne({where: {clsFacLow: rateRow.clsFacTable, class: cls, }, });
        //console.log("clsFac", clsFac);
        return {
          ...cw,
          classnew: cls,
          clsFac,
        };
      }),
    );
    result.classRates = classRates;
    console.log("classRates", classRates);
    console.log("result", result);

    // DW WEIGHT RANGE LOOP (LB4)
    // ===============================
    let originalRate: any[] = [];
    let originalDiffRateList: any[] = [];
    let finalDiffRateNew = 0;

    for (let y = 0; y < result.dwWeightRange.length; y++) {
      const crtDWRate: number[] = [];
      let finalDiffRate = 0;
      let totalRate = 0;
      const classRate: any[] = [];

      const crtdwWeightRange = result.dwWeightRange[y];

      // Base DW rate
      let DWRateRaw = (rateRow as any)[crtdwWeightRange];
      const DWRate = Number(`${DWRateRaw.slice(0, 4)}.${DWRateRaw.slice(4)}`);

      for (let u = 0; u < result.classWeight.length; u++) {
        const cw = result.classWeight[u];
        let cls = cw.class;
        if (cls === '77') cls = '0775';
        else if (cls === '92') cls = '0925';
        else cls = cls.toString().padStart(3, '0') + '0';
        const classnew = cls;

        const selectCls = classRates.find(
          (el: any) => el.classnew === classnew,
        );

        if (!selectCls || !selectCls.clsFac) {
          throw new HttpErrors.InternalServerError(`Classification factor not found for class ${classnew}`,);
        }

        const classificationFactorKey = result.DWclassificationFactor[y];
        const classificationRateRaw = selectCls.clsFac[classificationFactorKey];

        const rateClassificationFactor = Number(
          `${classificationRateRaw.slice(0, 1)}.${classificationRateRaw.slice(1)}`
        );

        let newRate = DWRate * rateClassificationFactor;

        // Adjustment logic (unchanged)
        if (originAdjustmentType === 2 || destinationAdjustmentType === 2) {
          if (originRateAdj !== 1) newRate *= originRateAdj;
          if (destinationRateAdj !== 1) newRate *= destinationRateAdj;
          newRate *= adjMatrixRate;
        } else {
          newRate *= adjOriginRate * adjDestinationRate * adjMatrixRate;
        }

        newRate = Number(newRate.toFixed(2));

        const actualWeightCharge = Number(((cw.weight / 100) * newRate).toFixed(2));

        crtDWRate.push(newRate);
        totalRate += actualWeightCharge;

        classRate.push({
          classification: classnew,
          weight: cw.weight,
          rate: newRate.toFixed(2),
          finalRate: actualWeightCharge.toFixed(2),
        });
      }

      // -------------------------------
      // FIRST RANGE
      // -------------------------------
      if (y === 0) {
        finalDiffRateNew = Number(totalRate.toFixed(2));

        originalDiffRateList.push({
          crtRate: 0,
          diffWeight: 0,
          diffRate: 0,
          finalDiffRate: finalDiffRateNew,
        });

        originalRate.push(...classRate);
      }

      // -------------------------------
      // NEXT RANGE COMPARISON
      // -------------------------------
      if (y > 0) {
        const smallDW = Math.min(...crtDWRate);
        const diffWeight =
          result.nextRange[y - 1] - result.totalWeight;

        const diffRate = Number(
          ((diffWeight / 100) * smallDW).toFixed(2)
        );

        finalDiffRate = Number(
          (totalRate + diffRate).toFixed(2)
        );

        if (Number(finalDiffRateNew) > finalDiffRate) {
          originalDiffRateList = [{
            crtRate: smallDW,
            diffWeight,
            diffRate,
            finalDiffRate,
          }];

          originalRate = [...classRate];
          finalDiffRateNew = finalDiffRate;
        }
      }

      // -------------------------------
      // LAST ITERATION → ASSIGN RESULT
      // -------------------------------
      if (y + 1 === result.dwWeightRange.length) {
        result.rate = originalRate;
        result.originalDiffRateList = originalDiffRateList;
        result.finalRate = finalDiffRateNew.toFixed(2);
        return this.addAditionaldRates(result);
      }
    }
  }

  private async findRate(result: any) {
    const rateBaseNumber = String(result.rateBaseNumber).substr(0, 6);

    const rateRow = await this.fedexRateArRepository.findOne({
      where: {rateBaseNumber},
    });

    if (!rateRow) {
      throw new HttpErrors.NotFound('Rate not found');
    }

    const minChargeRaw = (rateRow as any)[result.minChargeRange];
    const minCharge = Number(`${minChargeRaw.slice(0, 4)}.${minChargeRaw.slice(4)}`,);

    result.minCharges = minCharge.toFixed(2);

    // ======================================================
    // 7️⃣ CLASS WEIGHT RATE CALCULATION
    // ======================================================
    const classRates = await Promise.all(
      result.classWeight.map(async (cw: {class: string; weight: number}) => {
        let cls = cw.class;

        if (cls === '77') cls = '0775';
        else if (cls === '92') cls = '0925';
        else cls = cls.toString().padStart(3, '0') + '0';

        const clsFac = await this.fedexClsFacArRepository.findOne({where: {clsFacLow: rateRow.clsFacTable, class: cls, }, });
        console.log("clsFac", clsFac);
        return {
          ...cw,
          classnew: cls,
          clsFac,
        };
      }),
    );
    result.classRates = classRates;

    // DW WEIGHT RANGE LOOP (LB4)
    // ===============================
    let originalRate: any[] = [];
    let originalDiffRateList: any[] = [];
    let finalDiffRateNew = 0;

    for (let y = 0; y < result.dwWeightRange.length; y++) {
      const crtDWRate: number[] = [];
      let finalDiffRate = 0;
      let totalRate = 0;
      const classRate: any[] = [];

      const crtdwWeightRange = result.dwWeightRange[y];

      // Base DW rate
      let DWRateRaw = (rateRow as any)[crtdwWeightRange];
      const DWRate = Number(`${DWRateRaw.slice(0, 4)}.${DWRateRaw.slice(4)}`);

      for (let u = 0; u < result.classWeight.length; u++) {
        const cw = result.classWeight[u];
        let cls = cw.class;
        if (cls === '77') cls = '0775';
        else if (cls === '92') cls = '0925';
        else cls = cls.toString().padStart(3, '0') + '0';
        const classnew = cls;

        const selectCls = classRates.find(
          (el: any) => el.classnew === classnew,
        );

        if (!selectCls || !selectCls.clsFac) {
          throw new HttpErrors.InternalServerError(`Classification factor not found for class ${classnew}`,);
        }

        const classificationFactorKey = result.DWclassificationFactor[y];
        const classificationRateRaw = selectCls.clsFac[classificationFactorKey];

        const rateClassificationFactor = Number(
          `${classificationRateRaw.slice(0, 1)}.${classificationRateRaw.slice(1)}`
        );

        let newRate = DWRate * rateClassificationFactor;

        newRate = Number(newRate.toFixed(2));

        const actualWeightCharge = Number(((cw.weight / 100) * newRate).toFixed(2));

        crtDWRate.push(newRate);
        totalRate += actualWeightCharge;

        classRate.push({
          classification: classnew,
          weight: cw.weight,
          rate: newRate.toFixed(2),
          finalRate: actualWeightCharge.toFixed(2),
        });
      }

      // -------------------------------
      // FIRST RANGE
      // -------------------------------
      if (y === 0) {
        finalDiffRateNew = Number(totalRate.toFixed(2));

        originalDiffRateList.push({
          crtRate: 0,
          diffWeight: 0,
          diffRate: 0,
          finalDiffRate: finalDiffRateNew,
        });

        originalRate.push(...classRate);
      }

      // -------------------------------
      // NEXT RANGE COMPARISON
      // -------------------------------
      if (y > 0) {
        const smallDW = Math.min(...crtDWRate);
        const diffWeight =
          result.nextRange[y - 1] - result.totalWeight;

        const diffRate = Number(
          ((diffWeight / 100) * smallDW).toFixed(2)
        );

        finalDiffRate = Number(
          (totalRate + diffRate).toFixed(2)
        );

        if (Number(finalDiffRateNew) > finalDiffRate) {
          originalDiffRateList = [{
            crtRate: smallDW,
            diffWeight,
            diffRate,
            finalDiffRate,
          }];

          originalRate = [...classRate];
          finalDiffRateNew = finalDiffRate;
        }
      }

      // -------------------------------
      // LAST ITERATION → ASSIGN RESULT
      // -------------------------------
      if (y + 1 === result.dwWeightRange.length) {
        result.rate = originalRate;
        result.originalDiffRateList = originalDiffRateList;
        result.finalRate = finalDiffRateNew.toFixed(2);
        return this.addAditionaldRates(result);
      }
    }
  }

  private async addAditionaldRates(result: any) {
    // ===============================
    // DESTINATION CODE DISCOUNT LOGIC
    // ===============================
    const destCode: string[] = [
      '025', '026', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109',
      '110', '111', '112', '113', '114', '115', '116', '117', '118', '119',
      '200', '202', '203', '204', '205',
    ];

    const destinationString = String(result.destination);
    const subdest = destinationString.substr(0, 3);

    const hasDiscount = destCode.includes(subdest);

    if (hasDiscount) {
      result.discount = 36.3;
      result.mcf = 129.94;
    } else {
      result.discount = 0;
      result.mcf = 0;
    }
    // =======================================
    // FEDEX ADDITIONAL RATE + DELIVERY CHARGE
    // =======================================
    const originString = String(result.origin);
    // ----------------------------
    // Origin Additional Charge
    // ----------------------------
    const originAdditionalCharge = await this.fedexAdditionalRateRepository.findOne({where: {zip: originString}, });

    const originAdditionalRate = originAdditionalCharge ? Number(originAdditionalCharge.originRate) : 0;

    // ----------------------------
    // Destination Additional Charge
    // ----------------------------
    const destinationAdditionalCharge = await this.fedexAdditionalRateRepository.findOne({where: {zip: destinationString}, });

    const destinationAdditionalRate = destinationAdditionalCharge ? Number(destinationAdditionalCharge.destinationRate) : 0;

    // ----------------------------
    // Assign High Cost Object
    // ----------------------------
    result.fedexHighCost = {origin: originAdditionalRate, destination: destinationAdditionalRate, };

    // ----------------------------
    // Delivery Charge
    // ----------------------------
    const deliveryChargeResponse = await this.fedexDeliveryChargeRepository.findOne({where: {zip: destinationString}, });

    result.additionalRate = deliveryChargeResponse ? Number(deliveryChargeResponse.charge) : 0;

    // ----------------------------
    // CA CHARGE CHECK
    // ----------------------------
    if (result.originState === 'CA' || result.destinationState === 'CA') {
      return this.addCaCharge(result);   // must be async
    } else {
      result.fxfpCaCharge = 0;
      result.fxfeCaCharge = 0;
      return result;
    }

  }

  private async addCaCharge(result: any) {
    const recentRates = await this.recentRatesRepository.find();

    if (!recentRates || recentRates.length === 0) {
      result.fxfpCaCharge = 0;
      result.fxfeCaCharge = 0;
      return result;
    }

    // FEDEX PRIORITY (AP)
    const fxfpCaCharge = recentRates.find(
      r => r.category === 'AP' && r.carrier === 'FEDEX PRIORITY',
    );

    // FEDEX ECONOMY (AP)
    const fxfeCaCharge = recentRates.find(
      r => r.category === 'AP' && r.carrier === 'FEDEX ECONOMY',
    );

    result.fxfpCaCharge = fxfpCaCharge
      ? Number(fxfpCaCharge.caCharge)
      : 0;

    result.fxfeCaCharge = fxfeCaCharge
      ? Number(fxfeCaCharge.caCharge)
      : 0;

    return result;
  }
  private async discountDetail(result: any, fxType: string) {
    let returnResult: any[] = [];

    const businessRules = await this.businessRulesRepository.find({
      where: {companyId: result.companyId},
    });

    if (!businessRules || businessRules.length === 0) {
      console.log('Business Rules Empty');
      return returnResult;
    }

    // Extract from result object
    const calculationDetail = result.calculationDetail;
    const category = result.category;
    const type = fxType;
    const companyId = result.companyId;
    const resultRI = result.shipType;

    // ================================
    // FILTER BASE RULES
    // ================================
    const rules = businessRules.filter(el => {
      return (
        el.carrier === type &&
        el.category == category &&
        el.companyId == companyId
      );
    });

    if (rules.length === 0) {
      return returnResult;
    }

    const specialRulesArray: any[] = [];
    let intrastateRules: any[] = [];

    // ================================
    // INTRASTATE - CITY TO CITY
    // ================================
    intrastateRules = rules.filter(el => {
      return (
        el.direction === 'INTRASTATE' &&
        el.specificZipFrom == calculationDetail.origin &&
        el.specificZipTo == calculationDetail.destination
      );
    });

    // ================================
    // INTRASTATE - STATE TO STATE
    // ================================
    if (intrastateRules.length === 0) {
      intrastateRules = rules.filter(el => {
        return (
          el.direction === 'INTRASTATE' &&
          el.specificStateFrom ==
          calculationDetail.originState &&
          el.specificStateTo ==
          calculationDetail.destinationState
        );
      });
    }

    // ================================
    // SPECIAL RULES
    // ================================
    const specialRules = rules.filter(
      el => el.direction === 'SPECIAL RULES',
    );

    if (specialRules.length > 0) {
      const pushIfFound = (arr: any[]) => {
        if (arr && arr.length > 0) {
          specialRulesArray.push(arr[0]);
        }
      };

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom ==
            calculationDetail.origin &&
            el.specificZipTo ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom ==
            calculationDetail.originState &&
            el.specificStateTo ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom ==
            calculationDetail.origin &&
            el.specificZipTo ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom ==
            calculationDetail.originState &&
            el.specificZipTo ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom ==
            calculationDetail.origin &&
            el.specificZipTo == null,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom == null &&
            el.specificZipTo ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom ==
            calculationDetail.originState &&
            el.specificStateTo == null,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom == null &&
            el.specificStateTo ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom ==
            calculationDetail.origin &&
            el.specificZipTo == 'ALL',
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom == 'ALL' &&
            el.specificZipTo ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom ==
            calculationDetail.originState &&
            el.specificStateTo == 'ALL',
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom == 'ALL' &&
            el.specificStateTo ==
            calculationDetail.destinationState,
        ),
      );
    }

    // ================================
    // FINAL PRIORITY LOGIC
    // ================================
    if (intrastateRules.length > 0) {
      returnResult.push(intrastateRules[0]);
      return returnResult;
    } else if (specialRulesArray.length > 0) {
      returnResult.push(specialRulesArray[0]);
      return returnResult;
    } else {
      const regional = rules.filter(
        el => el.direction === 'REGIONAL',
      );
      const interRegional = rules.filter(
        el => el.direction === 'INTER REGIONAL',
      );

      if (resultRI === 'R') {
        if (regional.length > 0) {
          returnResult.push(regional[0]);
        }
      } else {
        if (interRegional.length > 0) {
          returnResult.push(interRegional[0]);
        }
      }

      return returnResult;
    }
  }



  @post('/fedex-cls-fac-ars')
  @response(200, {
    description: 'FedexClsFacAr model instance',
    content: {'application/json': {schema: getModelSchemaRef(FedexClsFacAr)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFacAr, {
            title: 'NewFedexClsFacAr',
            exclude: ['id'],
          }),
        },
      },
    })
    fedexClsFacAr: Omit<FedexClsFacAr, 'id'>,
  ): Promise<FedexClsFacAr> {
    return this.fedexClsFacArRepository.create(fedexClsFacAr);
  }
}
