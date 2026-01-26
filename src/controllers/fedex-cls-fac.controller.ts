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
import {FedexClsFac} from '../models';
import {
  BusinessRulesRepository,
  DirectionMatrixRepository,
  FedexAdditionalRateRepository,
  FedexAdjustRepository,
  FedexClsFacRepository,
  FedexDeliveryChargeRepository,
  FedexMatrixAdj0Repository,
  FedexMatrixAdj10Repository,
  FedexMatrixAdj1Repository,
  FedexMatrixAdj2Repository,
  FedexMatrixAdj3Repository,
  FedexMatrixAdj4Repository,
  FedexMatrixAdj5Repository,
  FedexMatrixAdj6Repository,
  FedexMatrixAdj7Repository,
  FedexMatrixAdj8Repository,
  FedexMatrixAdj9Repository,
  FedexMatrixRb0Repository,
  FedexMatrixRb10Repository,
  FedexMatrixRb1Repository,
  FedexMatrixRb2Repository,
  FedexMatrixRb3Repository,
  FedexMatrixRb4Repository,
  FedexMatrixRb5Repository,
  FedexMatrixRb6Repository,
  FedexMatrixRb7Repository,
  FedexMatrixRb8Repository,
  FedexMatrixRb9Repository,
  FedexRateRepository,
  FedexZipBaseRepository,
  RecentRatesRepository
} from '../repositories';

export class FedexClsFacController {
  private matrixRepoMap: Record<string, any>;
  private matrixAdjRepoMap: Record<string, any>;
  constructor(
    @repository(FedexClsFacRepository) public fedexClsFacRepository: FedexClsFacRepository,
    @repository(BusinessRulesRepository) public businessRulesRepository: BusinessRulesRepository,
    @repository(DirectionMatrixRepository) public directionMatrixRepository: DirectionMatrixRepository,
    @repository(FedexZipBaseRepository) public fedexZipBaseRepository: FedexZipBaseRepository,
    @repository(FedexMatrixRb0Repository) public fedexMatrixRb0Repository: FedexMatrixRb0Repository,
    @repository(FedexMatrixRb1Repository) public fedexMatrixRb1Repository: FedexMatrixRb1Repository,
    @repository(FedexMatrixRb2Repository) public fedexMatrixRb2Repository: FedexMatrixRb2Repository,
    @repository(FedexMatrixRb3Repository) public fedexMatrixRb3Repository: FedexMatrixRb3Repository,
    @repository(FedexMatrixRb4Repository) public fedexMatrixRb4Repository: FedexMatrixRb4Repository,
    @repository(FedexMatrixRb5Repository) public fedexMatrixRb5Repository: FedexMatrixRb5Repository,
    @repository(FedexMatrixRb6Repository) public fedexMatrixRb6Repository: FedexMatrixRb6Repository,
    @repository(FedexMatrixRb7Repository) public fedexMatrixRb7Repository: FedexMatrixRb7Repository,
    @repository(FedexMatrixRb8Repository) public fedexMatrixRb8Repository: FedexMatrixRb8Repository,
    @repository(FedexMatrixRb9Repository) public fedexMatrixRb9Repository: FedexMatrixRb9Repository,
    @repository(FedexMatrixRb10Repository) public fedexMatrixRb10Repository: FedexMatrixRb10Repository,
    @repository(FedexMatrixAdj0Repository) public fedexMatrixAdj0Repository: FedexMatrixAdj0Repository,
    @repository(FedexMatrixAdj1Repository) public fedexMatrixAdj1Repository: FedexMatrixAdj1Repository,
    @repository(FedexMatrixAdj2Repository) public fedexMatrixAdj2Repository: FedexMatrixAdj2Repository,
    @repository(FedexMatrixAdj3Repository) public fedexMatrixAdj3Repository: FedexMatrixAdj3Repository,
    @repository(FedexMatrixAdj4Repository) public fedexMatrixAdj4Repository: FedexMatrixAdj4Repository,
    @repository(FedexMatrixAdj5Repository) public fedexMatrixAdj5Repository: FedexMatrixAdj5Repository,
    @repository(FedexMatrixAdj6Repository) public fedexMatrixAdj6Repository: FedexMatrixAdj6Repository,
    @repository(FedexMatrixAdj7Repository) public fedexMatrixAdj7Repository: FedexMatrixAdj7Repository,
    @repository(FedexMatrixAdj8Repository) public fedexMatrixAdj8Repository: FedexMatrixAdj8Repository,
    @repository(FedexMatrixAdj9Repository) public fedexMatrixAdj9Repository: FedexMatrixAdj9Repository,
    @repository(FedexMatrixAdj10Repository) public fedexMatrixAdj10Repository: FedexMatrixAdj10Repository,
    @repository(FedexAdjustRepository) public fedexAdjustRepository: FedexAdjustRepository,
    @repository(FedexAdditionalRateRepository) public fedexAdditionalRateRepository: FedexAdditionalRateRepository,
    @repository(FedexDeliveryChargeRepository) public fedexDeliveryChargeRepository: FedexDeliveryChargeRepository,
    @repository(FedexRateRepository) public fedexRateRepository: FedexRateRepository,
    @repository(RecentRatesRepository) public recentRatesRepository: RecentRatesRepository,

  ) {
    this.matrixRepoMap = {
      '0': this.fedexMatrixRb0Repository,
      '1': this.fedexMatrixRb1Repository,
      '2': this.fedexMatrixRb2Repository,
      '3': this.fedexMatrixRb3Repository,
      '4': this.fedexMatrixRb4Repository,
      '5': this.fedexMatrixRb5Repository,
      '6': this.fedexMatrixRb6Repository,
      '7': this.fedexMatrixRb7Repository,
      '8': this.fedexMatrixRb8Repository,
      '9': this.fedexMatrixRb9Repository,
      'default': this.fedexMatrixRb10Repository,
    };
    this.matrixAdjRepoMap = {
      '0': this.fedexMatrixAdj0Repository,
      '1': this.fedexMatrixAdj1Repository,
      '2': this.fedexMatrixAdj2Repository,
      '3': this.fedexMatrixAdj3Repository,
      '4': this.fedexMatrixAdj4Repository,
      '5': this.fedexMatrixAdj5Repository,
      '6': this.fedexMatrixAdj6Repository,
      '7': this.fedexMatrixAdj7Repository,
      '8': this.fedexMatrixAdj8Repository,
      '9': this.fedexMatrixAdj9Repository,
      'default': this.fedexMatrixAdj10Repository,
    };
  }

  @post('/fedex-cls-facs/fedexApRate')
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
    result.category = 'AP';
    result.fpProfileRate = await this.discountDetail(result, 'FEDEX PRIORITY');
    result.feProfileRate = await this.discountDetail(result, 'FEDEX ECONOMY');
    const [originZipBase, destinationZipBase] = await Promise.all([
      this.fedexZipBaseRepository.findOne({where: {zipCode: calcDetails.origin}}),
      this.fedexZipBaseRepository.findOne({where: {zipCode: calcDetails.destination}}),
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
      const fedexAdjustDatas = await this.fedexAdjustRepository.find();
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

    const rateRow = await this.fedexRateRepository.findOne({where: {rateBaseNumber}, });

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

        const clsFac = await this.fedexClsFacRepository.findOne({where: {clsFacLow: rateRow.clsFacTable, class: cls, }, });
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

    const rateRow = await this.fedexRateRepository.findOne({
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

        const clsFac = await this.fedexClsFacRepository.findOne({where: {clsFacLow: rateRow.clsFacTable, class: cls, }, });
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
        el.specificZipFrom?.[0] == calculationDetail.origin &&
        el.specificZipTo?.[0] == calculationDetail.destination
      );
    });

    // ================================
    // INTRASTATE - STATE TO STATE
    // ================================
    if (intrastateRules.length === 0) {
      intrastateRules = rules.filter(el => {
        return (
          el.direction === 'INTRASTATE' &&
          el.specificStateFrom?.[0] ==
          calculationDetail.originState &&
          el.specificStateTo?.[0] ==
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
            el.specificZipFrom?.[0] ==
            calculationDetail.origin &&
            el.specificZipTo?.[0] ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom?.[0] ==
            calculationDetail.originState &&
            el.specificStateTo?.[0] ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] ==
            calculationDetail.origin &&
            el.specificZipTo?.[0] ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] ==
            calculationDetail.originState &&
            el.specificZipTo?.[0] ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] ==
            calculationDetail.origin &&
            el.specificZipTo?.[0] == null,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] == null &&
            el.specificZipTo?.[0] ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom?.[0] ==
            calculationDetail.originState &&
            el.specificStateTo?.[0] == null,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom?.[0] == null &&
            el.specificStateTo?.[0] ==
            calculationDetail.destinationState,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] ==
            calculationDetail.origin &&
            el.specificZipTo?.[0] == 'ALL',
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificZipFrom?.[0] == 'ALL' &&
            el.specificZipTo?.[0] ==
            calculationDetail.destination,
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom?.[0] ==
            calculationDetail.originState &&
            el.specificStateTo?.[0] == 'ALL',
        ),
      );

      pushIfFound(
        specialRules.filter(
          el =>
            el.specificStateFrom?.[0] == 'ALL' &&
            el.specificStateTo?.[0] ==
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









  @post('/fedex-cls-facs')
  @response(200, {
    description: 'FedexClsFac model instance',
    content: {'application/json': {schema: getModelSchemaRef(FedexClsFac)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FedexClsFac, {
            title: 'NewFedexClsFac',
            exclude: ['id'],
          }),
        },
      },
    })
    fedexClsFac: Omit<FedexClsFac, 'id'>,
  ): Promise<FedexClsFac> {
    return this.fedexClsFacRepository.create(fedexClsFac);
  }

}
