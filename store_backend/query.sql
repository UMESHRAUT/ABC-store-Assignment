-- MySQL Workbench Synchronization
-- Generated: 2020-09-21 17:30
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: umesh

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE TABLE IF NOT EXISTS `storeDatabase`.`category` (
  `category_id` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL COMMENT 'holds category name',
  `shop_shop_id` INT(11) NOT NULL,
  PRIMARY KEY (`category_id`),
  INDEX `index4` (`category_name` ASC),
  UNIQUE INDEX `category_id_UNIQUE` (`category_id` ASC),
  INDEX `fk_category_shop1_idx` (`shop_shop_id` ASC),
  CONSTRAINT `fk_category_shop1`
    FOREIGN KEY (`shop_shop_id`)
    REFERENCES `storeDatabase`.`shop` (`shop_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `storeDatabase`.`brand` (
  `brand_id` INT(11) NOT NULL AUTO_INCREMENT,
  `brand_name` VARCHAR(45) NULL DEFAULT NULL,
  `shop_shop_id` INT(11) NOT NULL,
  PRIMARY KEY (`brand_id`),
  INDEX `index3` (`brand_name` ASC),
  UNIQUE INDEX `brand_id_UNIQUE` (`brand_id` ASC),
  INDEX `fk_brand_shop1_idx` (`shop_shop_id` ASC),
  CONSTRAINT `fk_brand_shop1`
    FOREIGN KEY (`shop_shop_id`)
    REFERENCES `storeDatabase`.`shop` (`shop_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `storeDatabase`.`product` (
  `product_id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(45) NULL DEFAULT NULL COMMENT 'product name',
  `product_count` INT(11) NULL DEFAULT NULL COMMENT 'instock product count',
  `product_added` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'holds when the product aded',
  `product_modified` DATETIME NULL DEFAULT ON UPDATE CURRENT_TIMESTAMP COMMENT 'holds when the count of product change',
  `category_category_id` INT(11) NOT NULL,
  `brand_brand_id` INT(11) NOT NULL,
  `shop_shop_id` INT(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE INDEX `product_id_UNIQUE` (`product_id` ASC),
  INDEX `fk_product_category1_idx` (`category_category_id` ASC),
  INDEX `fk_product_brand1_idx` (`brand_brand_id` ASC),
  INDEX `fk_product_shop1_idx` (`shop_shop_id` ASC),
  CONSTRAINT `fk_product_category1`
    FOREIGN KEY (`category_category_id`)
    REFERENCES `storeDatabase`.`category` (`category_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_brand1`
    FOREIGN KEY (`brand_brand_id`)
    REFERENCES `storeDatabase`.`brand` (`brand_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_shop1`
    FOREIGN KEY (`shop_shop_id`)
    REFERENCES `storeDatabase`.`shop` (`shop_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `storeDatabase`.`shop` (
  `shop_id` INT(11) NOT NULL AUTO_INCREMENT,
  `shop_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`shop_id`),
  INDEX `index4` (`shop_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
