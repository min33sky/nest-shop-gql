import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.product.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
